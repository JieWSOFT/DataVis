
export default {

  namespace: 'index',

  state: {
    headerTitle: "Vis Data数据管理平台",
    collapsed: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changeCollapsed(state) {
      return { ...state, collapsed: !state.collapsed };
    },
  },

};
