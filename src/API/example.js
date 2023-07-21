import request from "../config/axios.config";

export function getExampleList(params) { //post用参数data
  return request({
      url: "/getExampleList", //注意请求路径不要写全的 写成这样即可
      method: "get",
      params
  });
}

export function addExample(data) { //post用参数data
  return request({
      url: "/addExample", //注意请求路径不要写全的 写成这样即可
      method: "post",
      data
  });
}

export function changeExample(data) { //post用参数data
  return request({
      url: "/changeExample", //注意请求路径不要写全的 写成这样即可
      method: "post",
      data
  });
}

export function deleteExample(params) { //post用参数data
  return request({
      url: "/deleteExample", //注意请求路径不要写全的 写成这样即可
      method: "delete",
      params
  });
}

export function visitExample(data) { //post用参数data
  return request({
      url: "/visitExample", //注意请求路径不要写全的 写成这样即可
      method: "post",
      data
  });
}