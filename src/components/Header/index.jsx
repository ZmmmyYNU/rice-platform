import React, { useEffect, useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import { HeaderWrapper } from "./style";
import { isPathPartlyExisted } from "../../utils";

export default function Header() {
  const { pathname } = useLocation();
  if (isPathPartlyExisted(pathname)) return;
  return (
    <HeaderWrapper>
      <div className="header">
        <span className="header-icons">
          <Link
            to={{ pathname: "/more" }}
            className="iconfont icon-yuzhouxingqiu-12"
          ></Link>
        </span>
        <span
          className="header-words"
          style={{ fontSize: "0.8rem", fontWeight: 500 }}
        >
          稻健康
        </span>
        <span className="header-icons">
          <Link
            to={{ pathname: "/search" }}
            className="iconfont icon-sousuo"
          ></Link>
          {/* <Link to={{ pathname: "/information" }} className='fa fa-bell-o'></Link> */}
        </span>
      </div>
    </HeaderWrapper>
  );
}
