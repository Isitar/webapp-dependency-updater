export const state = () => ({
  darkMode: false
})

export const mutations = {
  setDarkMode(state, darkMode) {
    state.darkMode = darkMode;
  }
}
