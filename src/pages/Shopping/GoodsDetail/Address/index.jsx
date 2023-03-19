import React from "react";
import { Wrapper } from "./style";
// import TopNavBar from "@/component/NavBar";
import TopNavBar from "../../../../components/NavBar";

export default function Address() {
  return (
    <Wrapper>
      <TopNavBar backgroundColor="#fff">我的收货地址</TopNavBar>
    </Wrapper>
  );
}
