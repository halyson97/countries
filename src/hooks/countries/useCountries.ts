import { gql, useQuery } from '@apollo/client';

const GET_COUNTRIES = gql`
    query {
        Country {
            name
            capital
            flag {
              emoji
              svgFile
            }
          }
    }
`;

const GET_COUNTRY = gql`
    query GetCountry($name: String){
        Country(filter:{name:$name}){
            name, 
            capital, 
            flag{svgFile}, 
            population, 
            area, 
            topLevelDomains{name, countries{name}}, 
            distanceToOtherCountries(first: 5) {
              distanceInKm
              countryName
            }    
        }
    }
`;

export const useGetCountries = (): any => useQuery(GET_COUNTRIES);

export const useGetCountry = (name: String): any => useQuery(GET_COUNTRY, {
  variables: { name },
});

export default {
  useGetCountries,
  useGetCountry,
};
