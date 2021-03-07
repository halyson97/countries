export default function countries(state = { countries: [] }, action: any) {
  switch (action.type) {
    case 'CHANGE_COUNTRIES':
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
}
