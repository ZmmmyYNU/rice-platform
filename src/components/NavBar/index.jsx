import React from "react";
import { NavBar, Space } from "antd-mobile";
import { NavIconArea } from "./style";
export default function TopNavBar(props) {
  const back = () => {
    history.back();
  };
  const right = (
    <div>
      <Space style={{ "--gap": "1rem" }}>
        <NavIconArea>
          <i className="iconfont icon-sousuo" />
        </NavIconArea>
        <NavIconArea>
          <i className="iconfont icon-gengduo-hengxiang" />
        </NavIconArea>
      </Space>
    </div>
  );
  const backIcon = (
    <NavIconArea>
      <i className="iconfont icon-fanhui " />
    </NavIconArea>
  );
  return (
    <NavBar
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        width: "100%",
        backgroundColor: props.backgroundColor || null,
        height: props.height || "2.2rem",
      }}
      right={right}
      backArrow={backIcon}
      onBack={back}
      {...props}
    />
  );
}
