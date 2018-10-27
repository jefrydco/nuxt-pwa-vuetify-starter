export const state = () => ({
  sidebar: false
});

export const mutations = {
  // eslint-disable-next-line
  toggleSidebar(state) {
    state.sidebar = !state.sidebar;
  }
};
