// import Vue from 'vue';
// import store from '@/store';
import * as types from './mutation-types';

export default {
  setLang({ commit }, payload) {
    commit(types.SET_LANG, payload);
  },
};
