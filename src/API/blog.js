import request from "../config/axios.config";

export function getBlogList(params) { //post用参数data
  return request({
      url: "/getBlogList", //注意请求路径不要写全的 写成这样即可
      method: "get",
      params
  });
}

export function getBlog(params) { //post用参数data
  return request({
      url: "/getBlog", //注意请求路径不要写全的 写成这样即可
      method: "get",
      params
  });
}

export function addBlog(data) { //post用参数data
  return request({
      url: "/addBlog", //注意请求路径不要写全的 写成这样即可
      method: "post",
      data
  });
}

export function changeBlog(data) { //post用参数data
  return request({
      url: "/changeBlog", //注意请求路径不要写全的 写成这样即可
      method: "post",
      data
  });
}

export function deleteBlog(params) { //post用参数data
  return request({
      url: "/deleteBlog", //注意请求路径不要写全的 写成这样即可
      method: "delete",
      params
  });
}