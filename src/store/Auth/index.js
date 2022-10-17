export default {
  // 加入  namespaced: true其他地方要取用時就要用詳細的路徑，可以區分其他vuex
  namespaced: true,
  state: {
    token: ''
  },
  actions: {
    handSetToken(context, token) {
      context.commit('setToken', token);
    }
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    }
  },
  getters: {
    getToken(state){
      return state.token
    }
  }
}
