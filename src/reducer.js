export const initialState = {
    user: null,
    data: null,
  };
  
  export const actionTypes = {
    SET_USER: "SET_USER",
    SET_DATA: "SET_DATA",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.user,
        };
      case actionTypes.SET_DATA:
        return {
          ...state,
          data:action.data,
        };
      default:
        return state;
    }
  };

export default reducer;
