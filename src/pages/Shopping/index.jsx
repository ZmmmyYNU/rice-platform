import React, { useState, useEffect } from "react";
import { ShopHeader } from "./Header";
import { GoodsList } from "./GoodsList";
import { getIdea } from "@/api/request";
import { CapsuleTabs, PullToRefresh } from "antd-mobile";
import styled from "styled-components";

export default function Shopping() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    (async () => {
      let { data } = await getIdea();
      setGoods(data);
    })();
  }, []);
  return (
    <Wrapper>
      <ShopHeader />
      <Content>
        <TabBox />
        <PullToRefresh
          onRefresh={async () => {
            await new Promise((resolve, reject) => {
              setTimeout(() => resolve(), 2000);
            });
            // setData([...getNextData(), ...data]);
          }}
        >
          <GoodsList goods={goods} />
        </PullToRefresh>
      </Content>
    </Wrapper>
  );
}

const TabBox = () => {
  return (
    <CapsuleTabs defaultActiveKey="1">
      <CapsuleTabs.Tab title="稻瘟病" key="1" />
      <CapsuleTabs.Tab title="水稻" key="2" />
      <CapsuleTabs.Tab title="小麦" key="3" />
      <CapsuleTabs.Tab title="小麦" key="4" />
      <CapsuleTabs.Tab title="小麦" key="5" />
    </CapsuleTabs>
  );
};

const Wrapper = styled.div`
  flex: 1;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  overflow: scroll;
`;
