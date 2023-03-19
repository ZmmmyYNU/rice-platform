import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Wrapper } from "./style";
import { Footer } from "../style";
import { Button, Form, Input, Cascader, Switch } from "antd-mobile";
import TopNavBar from "@/components/NavBar";
import Card from "@/components/Card";
import { options } from "./address";

export default function EditAddress() {
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState(false);
  let { state } = useLocation();
  console.log(state, "state");

  const [form] = Form.useForm();
  const onFinish = (v) => {
    console.log(v);
    history.back();
  };
  return (
    <>
      <TopNavBar backgroundColor="#fff">我的收货地址</TopNavBar>
      <Wrapper>
        <Card>
          <Form
            form={form}
            layout="horizontal"
            requiredMarkStyle="none"
            onFinish={onFinish}
            style={{
              "--border-bottom": "none",
              "--border-top": "none",
            }}
          >
            <Form.Item
              name="name"
              label="收货人"
              validateTrigger="onBlur"
              rules={[{ required: true, message: "姓名不能为空" }]}
            >
              <Input onChange={console.log} placeholder="请输入收货人姓名" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="手机号"
              validateTrigger="onBlur"
              rules={[
                { required: true, message: "手机号不能为空" },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "请输入正确的手机号",
                },
              ]}
            >
              <Input onChange={console.log} placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item
              name="address"
              label="收货地址"
              validateTrigger="onChange"
              rules={[{ required: true, message: "收货地址不能为空" }]}
            >
              <div
                className="address-box"
                onClick={() => {
                  setVisible(true);
                }}
              >
                {address ? (
                  address
                ) : (
                  <span className="placeholder">请输入收货地址</span>
                )}
                <Cascader
                  options={options}
                  visible={visible}
                  onClose={() => {
                    setVisible(false);
                  }}
                  onConfirm={(value) => {
                    setAddress(value.join("-"));
                    form.setFieldValue("address", value);
                  }}
                  onSelect={(value) => {
                    setAddress(value.join("-"));
                    form.setFieldValue("address", value);
                  }}
                />
              </div>
            </Form.Item>
            <Form.Item
              name="detail"
              label="门牌号"
              validateTrigger="onBlur"
              rules={[{ required: true, message: "详细地址不能为空" }]}
            >
              <Input onChange={console.log} placeholder="请输入详细地址" />
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <div className="default">
            设为默认地址
            <Switch defaultChecked />
          </div>
        </Card>
      </Wrapper>
      <Footer>
        <Button
          color="primary"
          type="submit"
          onClick={form.submit}
          style={{
            width: "100%",
            height: "100%",
            fontSize: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          保存并使用
        </Button>
      </Footer>
    </>
  );
}
