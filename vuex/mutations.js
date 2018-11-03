import types from "./mutation-types";

export default {
  [types.SET_EXAMPLE_STATE]: (state, payload) => {
    state.exampleState = payload;
  }
  // TODO: Add mutations
};
