export function changeCountries(countries: Array<any>) {
  return {
    type: 'CHANGE_COUNTRIES',
    countries,
  };
}

export default {
  changeCountries,
};
