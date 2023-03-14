import React, { ReactNode, useEffect } from "react";
import { http } from "../utils/http";
import { useAsync } from "../hooks/use-async";
import * as auth from "../utils/auth-provider";
import { FullScreenLoading } from "../components/libs";

const AuthContext = React.createContext(undefined);

AuthContext.displayName = "AuthContext";
// 在页面刷新时更新token的值
export const defaultUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

export const AuthProvider = ({ children }) => {
  const {
    data: user,
    setData: setUser,
    isIdle,
    isLoading,
    isError,
    error,
  } = useAsync();

  const login = (form) => auth.login(form).then(setUser);
  const register = (form) => auth.register(form).then(setUser);
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
    });

  // 页面加载时，更新user
  // useMount(() => {
  //   defaultUser().then(setUser);
  // });
  useEffect(() => {
    defaultUser().then(setUser);
  }, []);
  if (isIdle || isLoading) {
    return <FullScreenLoading />;
  }
  if (isError) {
    return <span style={{ color: "red" }}>error:{error}</span>;
  }

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, logout, register }}
    />
  );
};

export const useAuth = () => {
  // 使用context
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在AuthProvider中使用");
  }
  return context;
};
