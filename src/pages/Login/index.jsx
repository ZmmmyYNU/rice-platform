import React, { useState } from "react";
import { Wrapper } from "./style";
import { Button, Form, Input } from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import SendCode from "../../components/SendCode";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";

export default function Login() {
  const [visible, setVisible] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isUser, setIsUser] = useState(false);

  return (
    <Wrapper>
      <div className="glass"></div>
      <div className="form">
        {isUser ? <LoginComponent /> : <RegisterComponent />}
        <div className="to-login" onClick={() => setIsUser(!isUser)}>
          {isUser ? "没有账号？去注册" : "已有账号？去登陆"}
        </div>
      </div>
    </Wrapper>
  );
}
