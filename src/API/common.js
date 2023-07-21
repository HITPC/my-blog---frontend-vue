import request from "../config/axios.config";

export function getClickRange(params) { //post用参数data
  return request({
      url: "/getClickRange", //注意请求路径不要写全的 写成这样即可
      method: "get",
      params
  });
}

export function search(params) { //post用参数data
  return request({
      url: "/search", //注意请求路径不要写全的 写成这样即可
      method: "get",
      params
  });
}