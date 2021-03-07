export default function countries(state = { countries: [], country: null }, action: any) {
  switch (action.type) {
    case 'CHANGE_COUNTRIES':
      return {
        ...state,
        countries: action.countries,
      };
    case 'CHANGE_COUNTRY':
      return {
        ...state,
        country: action.country,
      };
    default:
      return state;
  }
}
