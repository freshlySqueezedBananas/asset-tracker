import {
  ADD_AVAILABLE,
  ADD_SELF,
  ADD_UNAVAILABLE,
  REMOVE_AVAILABLE,
  REMOVE_SELF,
  REMOVE_UNAVAILABLE
} from './mutation-types';

export default {
  [ADD_AVAILABLE](state, data) {
    state.available.push(data);
  },
  [ADD_SELF](state, data) {
    state.self.push(data);
  },
  [ADD_UNAVAILABLE](state, data) {
    state.unavailable.push(data);
  },
  [REMOVE_AVAILABLE](state, data) {
    state.available.splice(state.available.indexOf(data), 1);
  },
  [REMOVE_SELF](state, data) {
    state.self.splice(state.self.indexOf(data), 1);
  },
  [REMOVE_UNAVAILABLE](state, data) {
    state.unavailable.splice(state.unavailable.indexOf(data), 1);
  }
};
