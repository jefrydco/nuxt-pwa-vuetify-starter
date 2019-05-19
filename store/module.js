export const types = {
  SET_MODULE_EXAMPLE_STATE: 'SET_MODULE_EXAMPLE_STATE'
}

export const state = () => ({
  moduleExampleState: null
})

export const getters = {
  getModuleExampleState(state) {
    return state.moduleExampleState
  }
}

export const mutations = {
  [types.SET_MODULE_EXAMPLE_STATE](state, payload) {
    state.moduleExampleState = payload
  }
}

export const actions = {
  [types.SET_MODULE_EXAMPLE_STATE]({ commit }, payload) {
    commit(types.SET_MODULE_EXAMPLE_STATE, payload)
  }
}
