import { createStore } from 'vuex'

export default createStore({
  
  // 1、 存储所有全局数据
  state: {
    token: "",
    username: ""
  },
 
  // 2、 需要通过计算获取state里的内容获取的数据
  // 只能读取不可修改
  getters: {
    getToken(state){
      return state.token;
    },
    getUserName(state){
      return state.username;
    }
  },
 
  //  3、定义对state的各种操作
  // why不直接实现在mutation里需要写到action里?
  // mtations不能执行异步操作。aq:从云端获取信息-->(等待云端反馈)更新到state异步操作
  // 因此说:对于异步操作需要放到action里，简单的直接赋值操作可以直接放到mutation里
  mutations: {
    setToken(state, newValue){
      state.token = newValue;
    },
    setUserName(state, newValue){
      state.username = newValue;
    }
  },

  // 3、定义对state的各种操作
  // actions无法直接修改state，需要在mutations里更新
  // mutation不支持异步，所以需要在action里写api到url
  actions: {
      // 比说action定义了更新state的操作
      // 但是不可对其直接修改
      // 所有的修改操作必须放到mutations里
    updateToken ({ commit }, newValue) {
      commit('setToken', newValue);
    },
    updateUserName({ commit }, newValue){
      commit('setUserName', newValue);
    }
  },

  // state中信息过长时
  // 用来将state进行分割
  // 如下，将state树分割出一个user state。
//  modules: {
//	user: ModuleUser,
 // }
});

