import axios from "axios";
import { Message, MessageBox } from "element-ui";
import { getToken } from "./auth";

const service = axios.create({
  // baseURL:
  //   process.env.NODE_ENV === "development" ? "" : process.env.VUE_APP_BASE_API,
  baseURL: process.env.BASE_API,
  timeout: 15000
});

service.interceptors.request.use(
  config => {
    // if (getToken()) {
    //   config.headers["token"] = getToken();
    // }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (!response.status) {
      Message({
        message: response.data.Message,
        type: "error",
        duration: 5 * 1000
      });
    }

    return response;
  },
  error => {
    if (error.response) {
      Message({
        message: `${error.response.data.Message}`,
        type: "error",
        duration: 2 * 1000
      });
      if (error.response.status === 401) {
        MessageBox.confirm("你已被登出，请重新登录", "确定", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload();
          });
        });
      }
    } else {
      Message({
        message: `${error.message}, 稍后重试...`,
        type: "error",
        duration: 2 * 1000
      });
    }
    return Promise.reject(error);
  }
);

export default service;
