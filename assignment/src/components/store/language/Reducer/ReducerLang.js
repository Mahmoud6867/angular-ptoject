const INITIAL_STATE = {
  lang: "EN",
};

export default function langReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setLanguage":
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
