// import { useSnackbar } from "notistack";
import axios from "axios";
// import store from "../store/store.js";
// import { CLEAR_TOKEN } from "@store/types/mutation-types.js";

const env = process.env.NODE_ENV;
console.log({ env });
// create an axios instance
const service = axios.create({
  baseURL:
    env === "development"
      ? "http://localhost:3000"
      : "http://123.206.116.160:3000", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

service.interceptors.request.use((config) => {
  //   const token = store.getters.token;
  const token = "token";
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

service.interceptors.response.use(
  (response: any) => {
    return response.data || {};
  },
  (error: any) => {
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    if (!error.response) {
      alert("服务器不想服务了" + JSON.stringify(error));
      //   enqueueSnackbar("服务器不想服务了", { variant: "error" });
    } else {
      switch (error.response.status) {
        //   case 401: // token失效
        //     enqueueSnackbar(error.response.data, { variant: "error" });
        //     //   store.commit(CLEAR_TOKEN);
        //     break;
        //   case 422: // 用户不存在、密码错误
        //     enqueueSnackbar(error.response.data, { variant: "error" });
        //     break;
        default:
          alert(JSON.stringify(error.response.data));
      }
    }

    return Promise.reject(error.response.data);
  }
);

export default service;
