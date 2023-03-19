import React, { useState } from "react";
import { Wrapper } from "./style";
import { Button, Form, Input } from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import SendCode from "../../../components/SendCode";

export default function Register() {
  const [visible, setVisible] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [error, setError] = useState("网络错误");
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log(value, "value");
  };

  return (
    <Wrapper>
      <h2 className="title">账号注册</h2>
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
        style={{
          "--adm-color-background": "transparent",
          color: "#fff",
        }}
        onFinish={onFinish}
        footer={
          <Button
            block
            className="submit"
            type="submit"
            color="primary"
            size="large"
          >
            注册
          </Button>
        }
      >
        <Form.Item
          label="用户名"
          validateTrigger="onBlur"
          name="username"
          rules={[{ required: true, message: "用户名不能为空" }]}
          style={{
            backgroundColor: "transparent",
            "--adm-color-text-secondary": "#fff",
          }}
        >
          <Input
            style={{ "--color": "#fff" }}
            placeholder="请输入用户名"
            clearable
          />
        </Form.Item>
        <Form.Item
          label={"密码"}
          name="password"
          validateTrigger="onBlur"
          rules={[{ required: true, message: "密码不能为空" }]}
          style={{
            backgroundColor: "transparent",
            "--adm-color-text-secondary": "#fff",
          }}
          extra={
            <div>
              {!visible ? (
                <EyeInvisibleOutline onClick={() => setVisible(true)} />
              ) : (
                <EyeOutline onClick={() => setVisible(false)} />
              )}
            </div>
          }
        >
          <Input
            style={{ "--color": "#fff" }}
            placeholder={"请输入密码"}
            clearable
            type={visible ? "text" : "password"}
          />
        </Form.Item>
        <Form.Item
          label="手机号"
          name="phone"
          validateTrigger="onBlur"
          rules={[
            { required: true, message: "手机号不能为空" },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: "请输入正确的手机号",
            },
          ]}
          style={{
            backgroundColor: "transparent",
            "--adm-color-text-secondary": "#fff",
          }}
        >
          <Input
            onBlur={() => console.log("blur")}
            style={{ "--color": "#fff" }}
            placeholder="请输入手机号"
            clearable
          />
        </Form.Item>
        <Form.Item
          label="验证码"
          name="code"
          validateTrigger="onBlur"
          rules={[{ required: true, message: "验证码不能为空" }]}
          style={{
            backgroundColor: "transparent",
            "--adm-color-text-secondary": "#fff",
          }}
          extra={
            <div>
              <SendCode />
            </div>
          }
        >
          <Input
            style={{ "--color": "#fff" }}
            placeholder={"请输入验证码"}
            clearable
            type="text"
          />
        </Form.Item>
      </Form>
    </Wrapper>
  );
}
