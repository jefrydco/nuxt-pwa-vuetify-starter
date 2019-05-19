export const types = {
  SET_EXAMPLE_STATE: 'SET_EXAMPLE_STATE'
}

export const state = () => ({
  exampleState: null
})

export const getters = {
  getExampleState(state) {
    return state.exampleState
  }
}

export const mutations = {
  [types.SET_EXAMPLE_STATE](state, payload) {
    state.exampleState = payload
  }
}

export const actions = {
  [types.SET_EXAMPLE_STATE]({ commit }, payload) {
    commit(types.SET_EXAMPLE_STATE, payload)
  }
}
