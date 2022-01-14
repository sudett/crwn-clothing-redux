import HOME_DATA from "./home-data";

const INITIAL_STATE = {
  items: HOME_DATA,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
