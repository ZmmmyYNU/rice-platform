import React from "react";
import { Wrapper } from "./style";
export default function Empty() {
  return (
    <Wrapper>
      <i
        className="iconfont icon-kongzhuangtai"
        style={{
          fontSize: "4rem",
        }}
      ></i>
      暂无数据~
    </Wrapper>
  );
}
