import React, { useState } from "react";
import { Wrapper } from "./style";
import { Button, Form, Input } from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import SendCode from "../../../components/SendCode";

export default function LoginComponent() {
  const [visible, setVisible] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [error, setError] = useState("网络错误");
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log(value, "value");
  };
  return (
    <Wrapper>
      <h2 className="title">{isPassword ? "密码登录" : "验证码登录"}</h2>
      <span
        style={{
          color: "var(--adm-color-danger)",
        }}
      >
        {error}
      </span>
      <Form
        form={form}
        requiredMarkStyle="none"
        layout="horizontal"
        onFinish={onFinish}
        style={{
          "--adm-color-background": "transparent",
          color: "#fff",
        }}
        footer={
          <Button
            block
            className="submit"
            type="submit"
            color="primary"
            size="large"
          >
            登录
          </Button>
        }
      >
        <Form.Item
          label="手机号"
          name="username"
          style={{
            backgroundColor: "transparent",
            "--adm-color-text-secondary": "#fff",
          }}
          validateTrigger="onBlur"
          rules={[
            { required: true, message: "手机号不能为空" },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: "请输入正确的手机号",
            },
          ]}
        >
          <Input
            style={{ "--color": "#fff" }}
            placeholder="请输入手机号"
            clearable
          />
        </Form.Item>
        <Form.Item
          label={isPassword ? "密码" : "验证码"}
          name="password"
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: `${isPassword ? "密码" : "验证码"}不能为空`,
            },
          ]}
          style={{
            backgroundColor: "transparent",
            "--adm-color-text-secondary": "#fff",
          }}
          extra={
            isPassword ? (
              <div>
                {!visible ? (
                  <EyeInvisibleOutline onClick={() => setVisible(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisible(false)} />
                )}
              </div>
            ) : (
              <SendCode />
            )
          }
        >
          <Input
            style={{ "--color": "#fff" }}
            placeholder={isPassword ? "请输入密码" : "请输入验证码"}
            clearable
            type={!isPassword ? "text" : visible ? "text" : "password"}
          />
        </Form.Item>
        <div className="switch">
          <div className="change" onClick={() => setIsPassword(!isPassword)}>
            <i className="iconfont icon-jiantou_zuoyouqiehuan_o"></i>
            {isPassword ? "验证码登录" : "密码登录"}
          </div>
          <div
            className="forget"
            style={{ display: isPassword ? "block" : "none" }}
          >
            忘记密码?
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}
