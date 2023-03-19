import React, { useState } from "react";
import { Wrapper } from "./style";
import { ErrorBlock } from "antd-mobile";
import Empty from "../../../components/Empty";

export default function Collect() {
  const [active, setActive] = useState(1);
  return (
    <Wrapper>
      <div className="content">
        <div className="tabs">
          <div
            className={active == 1 ? "tabs-item active" : "tabs-item"}
            onClick={() => setActive(1)}
          >
            识别历史
          </div>
          <div
            className={active == 2 ? "tabs-item active" : "tabs-item"}
            onClick={() => setActive(2)}
          >
            收藏
          </div>
        </div>
        <Empty />
      </div>
    </Wrapper>
  );
}
