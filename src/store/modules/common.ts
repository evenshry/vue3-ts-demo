import { RootState } from '@/store';
import { ActionContext, Module } from 'vuex';

export interface CommonState {
  token: string;
}

const module: Module<CommonState, RootState> = {
  namespaced: true,
  state: {
    token: 'default',
  },
  getters: {
    token: (state: CommonState): string => {
      return state.token;
    },
  },
  mutations: {
    setToken(state: CommonState, value: string): void {
      state.token = value;
    },
  },
  actions: {
    isLogin(context: ActionContext<CommonState, RootState>): boolean {
      const state = context.state;
      return state.token === 'default';
    },
  },
};

export default module;
