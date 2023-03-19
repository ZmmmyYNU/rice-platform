import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, Footer } from "./style";
import TopNavBar from "@/components/NavBar";
import Card from "@/components/Card";
import { Button, Checkbox } from "antd-mobile";
import { dim } from "@/utils/dim-info";

const data = [
  {
    isDefault: true,
    checked: true,
  },
  {
    isDefault: false,
    checked: false,
  },
  {
    isDefault: false,
    checked: false,
  },
  {
    isDefault: false,
    checked: false,
  },
  {
    isDefault: false,
    checked: false,
  },
  {
    isDefault: false,
    checked: false,
  },
  {
    isDefault: false,
    checked: false,
  },
  {
    isDefault: false,
    checked: false,
  },
  {
    isDefault: false,
    checked: false,
  },
];

export default function Address() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const editAddress = (edit) => {
    navigate("/editaddress", { state: edit });
  };
  return (
    <>
      <TopNavBar backgroundColor="#fff">我的收货地址</TopNavBar>
      <Wrapper>
        {data.map((item, i) => (
          <Card key={i}>
            <div className="card-item">
              <Checkbox
                defaultChecked={item.checked}
                onChange={() => {
                  console.log(i);
                }}
              />
              <div className="detail">
                <div className="dim">云南省 昆明市 呈贡区 雨花街道</div>
                <div className="area">
                  <div
                    className="default"
                    style={{
                      display: item.isDefault ? "block" : "none",
                    }}
                  >
                    默认
                  </div>
                  云南大学呈贡校区
                </div>
                <div className="info">张志鹏 {dim("phone", 18388482240)}</div>
              </div>
              <i
                className="iconfont icon-bianji"
                onClick={() =>
                  editAddress({ name: "zzp", address: "云南大学" })
                }
              ></i>
            </div>
          </Card>
        ))}
      </Wrapper>
      <Footer>
        <Button
          color="primary"
          style={{
            width: "100%",
            height: "100%",
            fontSize: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={editAddress}
        >
          新增地址
        </Button>
      </Footer>
    </>
  );
}
