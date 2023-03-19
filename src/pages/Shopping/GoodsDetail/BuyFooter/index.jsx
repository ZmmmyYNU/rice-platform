import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import { Button } from "antd-mobile";

export default function BuyFooter({ history }) {
  return (
    <Wrapper>
      <div className="footer">
        <div className="icon-box">
          <i className="iconfont icon-kefu"></i>
          客服
        </div>
        <Link to="/cart">
          <div className="icon-box">
            <i className="iconfont icon-gouwuche"></i>
            购物车
          </div>
        </Link>
        <div className="add-cart">
          <Button className="btn add-btn">加入购物车</Button>
          <Link to="/submitorder">
            <Button className="btn buy" color="primary">
              立即购买
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
