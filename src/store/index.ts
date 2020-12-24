import { createStore } from 'vuex';

import common from './modules/common';

export interface RootState {
  root: boolean;
}

export default createStore<RootState>({
  state: {
    root: true,
  },
  mutations: {},
  actions: {},
  modules: {
    common,
  },
});
