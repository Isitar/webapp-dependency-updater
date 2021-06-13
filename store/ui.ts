export interface IUIState {
  darkMode: boolean;
}

export const state = () => ({
  darkMode: false
})

export const mutations = {
  setDarkMode(state: IUIState, darkMode: boolean) {
    state.darkMode = darkMode;
  }
}
