import request from "@/utils/request";

export function list(query) {
  return request({
    url: process.env.VUE_APP_BASE_API,
    method: "get",
    params: query
  });
}

export function user(data) {
  return request({
    url: ``,
    method: "post",
    data
  });
}
