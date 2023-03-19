import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FooterWrapper } from "./style";
import classnames from "classnames";
import { isPathPartlyExisted } from "../../utils";

export default function Footer(props) {
  const { pathname } = useLocation();
  console.log(pathname, "pathname");
  //   let pathRes = pathname.split("/");
  //   let pathname2 = "/" + pathRes[1];
  //   if (isPathPartlyExisted(pathname2)) return;
  return (
    <FooterWrapper>
      <Link
        to="/home/idea"
        className={classnames({
          active: pathname == "/home/idea" || pathname == "/",
        })}
      >
        {/* <i className="fa fa-home"></i> */}
        <span>首页</span>
      </Link>
      <Link
        to="/home/shopping"
        className={classnames({ active: pathname == "/home/shopping" })}
      >
        {/* <i className="icon-guanzhu1 iconfont"></i> */}
        <span>购物</span>
      </Link>
      <Link to="/camera">
        <i className="iconfont icon-paizhao-copy"></i>
      </Link>

      <Link
        to="/home/xiaoxi"
        className={classnames({ active: pathname == "/home/xiaoxi" })}
      >
        {/* <i className="iconfont icon-vip"></i> */}
        <span>消息</span>
      </Link>
      <Link
        to="/home/mine"
        className={classnames({ active: pathname == "/home/mine" })}
      >
        {/* <i className="fa fa-user"></i> */}
        <span>我</span>
      </Link>
    </FooterWrapper>
  );
}
