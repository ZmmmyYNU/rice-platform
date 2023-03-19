import React from "react";
import { ShopTopWrapper } from "./style";
import { Link } from "react-router-dom";
export function ShopHeader() {
  return (
    <ShopTopWrapper>
      <div
        className="search-input"
        onClick={() => {
          history.push({ pathname: "/search" });
        }}
      >
        <div className="iconfont icon-sousuo"></div>
        <span>搜索商品</span>
      </div>

      <div className="icon-left iconfont icon-gouwuche"></div>
      <Link to="/orderlist">
        <div className="icon-left iconfont icon-dingdan"></div>
      </Link>

      <div className="icon-left iconfont icon-gengduo-hengxiang"></div>
    </ShopTopWrapper>
  );
}
