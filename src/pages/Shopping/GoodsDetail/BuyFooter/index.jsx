import React from "react";
import { Wrapper } from "./style";
import { Button } from "antd-mobile";

export default function BuyFooter() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="icon-box">
          <i className="iconfont icon-kefu"></i>
          客服
        </div>
        <div className="icon-box">
          <i className="iconfont icon-gouwuche"></i>
          购物车
        </div>
        <div className="add-cart">
          <Button className="btn add-btn">加入购物车</Button>
          <Button className="btn buy" color="primary">
            立即购买
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
