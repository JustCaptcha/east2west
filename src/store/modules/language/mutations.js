// import app from '@/main';
import { SETLANG } from './mutation-types';
import './state';

export default{
  /*
  [SET_LANG](state, payload) {
    app.$i18n.locale = payload;
  },
  */
  [SETLANG](state, payload) {
    state.locale = payload;
  },
};
