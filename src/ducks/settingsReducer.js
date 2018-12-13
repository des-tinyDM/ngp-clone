const CHANGE_COLOR = "CHANGE_COLOR";

const initialState = {
  color: "red"
};

export function updateColorScheme(color) {
  return {
    type: CHANGE_COLOR,
    payload: color
  };
}

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case `${CHANGE_COLOR}`:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
}
