import { getToken, setToken, removeToken } from "@/utils/auth";

const user = {
  state: {
    token: getToken(),
    name: ""
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      // const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        const t = "1111123445fsdafaffaafd";
        setToken(t);
        commit("SET_TOKEN", t);
        commit("SET_NAME", "James");
        resolve();
      });
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {},

    // 前端 退出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
