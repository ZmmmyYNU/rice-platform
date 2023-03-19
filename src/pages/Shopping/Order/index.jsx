import React from "react";
import { Wrapper } from "./style";
import Card from "../../../components/Card";
import TopNavBar from "../../../components/NavBar";
import FooterBuy from "./FooterBuy";
import { dim } from "../../../utils/dim-info";
import { Image, Stepper } from "antd-mobile";
export default function Order() {
  return (
    <>
      <TopNavBar backgroundColor={"#fff"} height={"2.2rem"}>
        提交订单
      </TopNavBar>
      <Wrapper>
        <Card>
          <div className="address">
            <div className="address-info">
              <span className="dim">云南省昆明市呈贡区</span>
              <span className="detail">云南大学呈贡校区</span>
              <span className="user">张志鹏 {dim("phone", "18388482240")}</span>
            </div>
            <i className="iconfont icon-xiangyoujiantou"></i>
          </div>

          <div className="delivery">
            发货时效
            <div className="time">下单后48h内</div>
          </div>
        </Card>
        <Card>
          <div className="specs">
            <Image
              src={
                "https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
              }
              width="3.2rem"
              height="3.2rem"
              fit="cover"
              style={{ borderRadius: 4 }}
            />
            <div className="name">
              <div className="title">999感冒灵颗粒</div>
              <div className="price one-price">￥14.50</div>
            </div>
            <Stepper
              digits={0}
              min={1}
              defaultValue={1}
              style={{
                "--button-background-color": "transparent",
                "--input-width": "1.5rem",
                marginLeft: "3.5rem",
              }}
            />
          </div>
          <div className="fare">
            运费
            <div className="price fare-price">￥10.00</div>
          </div>
          <div className="subtotal">
            共1件 小计:
            <div className="price sub-price">￥14.50</div>
          </div>
        </Card>
      </Wrapper>
      <FooterBuy />
    </>
  );
}
