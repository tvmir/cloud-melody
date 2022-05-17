import { action, createStore } from "easy-peasy";

export const store = createStore({
  activeSong: null,
  activeSongs: [],
  changeCurrSong: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeSongs: action((state: any, payload) => {
    state.activeSong = payload;
  }),
});
