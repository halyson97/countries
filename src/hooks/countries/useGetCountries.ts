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

export const useGetCountries = (): any => useQuery(GET_COUNTRIES);

export default {
  useGetCountries,
};
