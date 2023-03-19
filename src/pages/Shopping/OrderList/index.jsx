import React from "react";
import { Wrapper } from "./style";
import TopNavBar from "../../../components/NavBar";
import Card from "../../../components/Card";

import { Image, Modal, Toast, SwipeAction } from "antd-mobile";
const rightActions = [
  {
    key: "unsubscribe",
    text: "取消关注",
    color: "light",
  },
  {
    key: "mute",
    text: "免打扰",
    color: "warning",
  },
  {
    key: "delete",
    text: "删除",
    color: "danger",
  },
];
export default function OrderList() {
  const data = Array(8)
    .fill(0)
    .map((_, index) => ({
      id: index,
      price: "14.50",
      total: "14.5",
      pay: "14.5",
      count: 1,
      name: index + "感冒灵颗粒10ml",
      img: "https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80",
    }));
  return (
    <>
      <TopNavBar backgroundColor="#fff" height="2.2rem">
        订单列表
      </TopNavBar>
      <Wrapper>
        {data.map((item, index) => (
          <SwipeAction key={index} rightActions={rightActions}>
            <Card key={index}>
              <div className="specs">
                <Image
                  src={item.img}
                  width="3.2rem"
                  height="3.2rem"
                  fit="cover"
                  style={{ borderRadius: 4 }}
                />
                <div className="name">
                  <div className="title">{item.name}</div>
                  <div className="price one-price">￥{item.price}</div>
                </div>
                <div className="count">*{item.count}</div>
              </div>
              <div className="pay-for">
                <span className="total">总价:￥{item.total}</span>
                <span className="pay">实付:￥{item.pay}</span>
              </div>
              <div
                className="more"
                onClick={async () => {
                  const res = await Modal.confirm({
                    content: "确定删除该订单吗？",
                    onConfirm: () => {
                      console.log("Confirmed");
                    },
                  });
                  if (res) {
                    Toast.show({ content: "点击了确认", position: "bottom" });
                  } else {
                    Toast.show({ content: "点击了取消", position: "bottom" });
                  }
                }}
              >
                删除订单
              </div>
            </Card>
          </SwipeAction>
        ))}
      </Wrapper>
    </>
  );
}
