import * as actionType from "./actions";

const initialState = {
  text: "",
};
const reducer = (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case actionType.TEXT:
      const { payload } = action;
      const { txt } = payload;
      //console.log(txt);
      return {
        ...state,
        text: txt,
      };
    default:
      return state;
  }
};
export default reducer;
