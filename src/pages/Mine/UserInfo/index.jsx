import React from "react";
import { Wrapper } from "./style";
import { Avatar, Button } from "antd-mobile";

export default function UserInfo() {
  return (
    <Wrapper>
      <div className="glass"></div>
      <div className="top">
        <div className="header">
          <i
            className="iconfont icon-caidan"
            style={{
              fontSize: "1rem",
            }}
          ></i>
          <i className="iconfont icon-7"></i>
        </div>
        <div className="userinfo">
          <Avatar
            src={
              "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            style={{ "--size": "3rem", "--border-radius": "1.5rem" }}
          />
          <div className="user-txt">
            <div className="username">kk</div>
            <div className="number">账号: {"18388482240"}</div>
          </div>
        </div>
        <div className="info">
          <p>{"点击这里，填写简介"}</p>
          <div className="sex">
            {"nan" ? (
              <i
                className="iconfont icon-nan"
                style={{
                  color: "skyblue",
                }}
              ></i>
            ) : (
              <i
                className="iconfont icon-nv"
                style={{
                  color: "pink",
                }}
              ></i>
            )}
          </div>
        </div>
        <div className="setting">
          <Button className="btn">编辑资料</Button>
          <Button className="btn">
            <i className="iconfont icon-shezhi"></i>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
