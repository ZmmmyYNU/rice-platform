import React, { useState } from "react";
import { Wrapper } from "./style";
import TopNavBar from "../../../components/NavBar";
import Card from "../../../components/Card";
import CartFooter from "./CartFooter";

import { Checkbox, Image, Stepper, SwipeAction } from "antd-mobile";

const data = Array(8)
  .fill(0)
  .map((_, index) => ({ id: index }));

export default function Cart() {
  const [checkVal, setCheckVal] = useState([]);
  const [isManage, setIsManage] = useState(false);
  const countArr = [];

  const onCheckAll = (val) => {
    if (val) {
      let arr = [];
      data.map((item) => {
        arr.push(item.id);
      });
      setCheckVal(arr);
    } else {
      setCheckVal([]);
    }
  };
  const toggleManage = () => {
    setCheckVal([]);
    setIsManage(!isManage);
  };
  const handelDelete = () => {
    console.log(checkVal);
  };
  return (
    <>
      <TopNavBar height="2.2rem" backgroundColor="#fff">
        购物车
      </TopNavBar>
      <Wrapper>
        <div className="manage">
          <span onClick={toggleManage}> {isManage ? "取消" : "管理"}</span>
        </div>
        <div className="cart-list">
          <Checkbox.Group
            value={checkVal}
            onChange={(val) => {
              setCheckVal(val);
            }}
          >
            {data.map((item, index) => (
              <Card key={index}>
                <SwipeAction
                  key={index}
                  rightActions={[
                    {
                      key: "delete",
                      text: "删除",
                      color: "danger",
                      onClick: (e) => {
                        console.log("删除", index);
                      },
                    },
                  ]}
                >
                  <div className="cart-item">
                    <Checkbox value={item.id} />
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
                      }
                      width="3.2rem"
                      height="3.2rem"
                      fit="cover"
                      style={{ borderRadius: 4, marginLeft: "0.5rem" }}
                    />
                    <div className="describe">
                      <div className="name">999感冒灵颗粒</div>
                      <div className="price-count">
                        <div className="price">￥14.5</div>
                        <Stepper
                          digits={0}
                          min={1}
                          defaultValue={1}
                          style={{
                            "--button-background-color": "transparent",
                            "--input-width": "1.5rem",
                          }}
                          onChange={(value) => {}}
                        />
                      </div>
                    </div>
                  </div>
                </SwipeAction>
              </Card>
            ))}
          </Checkbox.Group>
        </div>
        <CartFooter
          checked={checkVal.length === data.length}
          onCheckAll={onCheckAll}
          isManage={isManage}
          disabled={checkVal.length === 0}
          handelDelete={handelDelete}
        />
      </Wrapper>
    </>
  );
}
