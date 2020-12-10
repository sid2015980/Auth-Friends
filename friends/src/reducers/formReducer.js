const initialValue = {
    loading: false,
    data: [],
    error: "",
  };
  
  export const formReducer = (state = initialValue, action) => {
    switch (action.type) {
      case "FETCHING_DATA":
        return {
          ...state,
          loading: true,
        };
      case "SAVING_DATA":
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case "ERRORS":
        return {
          ...state,
        };
      // ADDING NEW FRIENDS
      case "FETCHING_NEW_FRIEND":
        return {
          ...state,
          loading: true,
        };
      case "ADDING_NEW_FRIEND":
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case "NEW_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      //  removing friend
      case "REMOVING_FRIEND":
        return {
          ...state,
          loading: true,
        };
      case "REMOVED_FRIEND":
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case "ERROR_REMOVED":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };