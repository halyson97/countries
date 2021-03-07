export function saveContries(countries: Array<any>) {
  return {
    type: 'CHANGE_COUNTRIES',
    countries,
  };
}

export function saveContry(country: any) {
  return {
    type: 'CHANGE_COUNTRY',
    country,
  };
}

export default {
  saveContries,
  saveContry,
};
