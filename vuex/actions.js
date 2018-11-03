import types from "./mutation-types";

export default {
  exampleActions({ commit }, payload) {
    commit(types.SET_EXAMPLE_STATE, payload);
  }
  // TODO: Add actions
};
