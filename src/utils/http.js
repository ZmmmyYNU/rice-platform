import qs from "qs";
import * as auth from "./auth-provider";
import { useAuth } from "../context/auth-context";
import { useCallback } from "react";

const apiUrl = "localhost:3000";

export const http = async (
  endpoint,
  { data, token, headers, ...customConfig } = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    /**
      let params = { c: 'b', a: 'd' };
      qs.stringify(params)
      
      // 结果是
      'c=b&a=d'
     */
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      // 没有权限
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        // 在fetch中必须要手动抛出异常
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]) =>
      http(endpoint, { ...config, token: user?.token }),
    [user?.token]
  );
};
