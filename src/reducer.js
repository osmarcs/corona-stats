export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SELECTED_COUNTRY":
      return {
        ...state,
        selectedCountry: payload,
      }
    case "DEATH_DETAIL":
      return {
        ...state,
        deathsDetail: payload,
      }
    default:
      return state;
  }
}