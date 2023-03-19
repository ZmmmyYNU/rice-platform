import React from "react";
import { FooterWrapper } from "./style";
import { Button } from "antd-mobile";

export default function FooterBuy({ amount }) {
  return (
    <FooterWrapper>
      合计:
      <div className="amount">￥14.50</div>
      <Button color="primary" className="buy-btn">
        立即付款
      </Button>
    </FooterWrapper>
  );
}
