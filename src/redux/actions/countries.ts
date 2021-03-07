export function saveContries(countries: Array<any>) {
  return {
    type: 'CHANGE_COUNTRIES',
    countries,
  };
}

export default {
  saveContries,
};
