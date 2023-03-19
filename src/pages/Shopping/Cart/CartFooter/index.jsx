import React from "react";
import { FooterWrapper } from "./style";
import { Checkbox, Button } from "antd-mobile";
import { Link } from "react-router-dom";
export default function CartFooter({
  count=0,
  onCheckAll,
  checked,
  isManage,
  disabled,
  handelDelete,
}) {
  return (
    <FooterWrapper>
      <div className="check-all">
        <Checkbox
          onChange={onCheckAll}
          checked={checked}
          className="checkbox"
        />
        全部
      </div>
      {isManage ? (
        <Button
          disabled={disabled}
          className="del-btn"
          style={{
            "--border-color": "var(--adm-color-primary)",
          }}
          onClick={handelDelete}
        >
          删除
        </Button>
      ) : (
        <div className="subtotal">
          合计:
          <div className="price">￥21</div>
          <Link to={"/submitorder"}>
            <Button color="primary" className="buy-btn">
              结算({count})
            </Button>
          </Link>
        </div>
      )}
    </FooterWrapper>
  );
}
