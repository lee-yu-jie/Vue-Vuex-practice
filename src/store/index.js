import { createStore } from "vuex";
import Auth from "./Auth";
export default createStore({
  // state是放資料地方
  state: {
    isOpen: false
  },
  // actions用來取用mutations的方法
  actions: {
    // 呼叫action裡的方法,會在需要的頁面使用dispatch
    handMenuOpen(context){
      // context和commit為固定用詞
      // 使用commit使用方法
      context.commit('handOpenState')
    }
  },
  // mutations制定方法,state需修改都要用mutations
  mutations: {
    handOpenState(state){
      state.isOpen = !state.isOpen
    }

  },
  // 用getters把資料(state)傳出去
  getters: {
    isOpen(state){
      return state.isOpen
    }
  },
  modules: {
    Auth,
  }
});
