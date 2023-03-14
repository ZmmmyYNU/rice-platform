import React, { useState } from "react";
import { Wrapper } from "./style";

export default function Search() {
  const [value, setValue] = useState("");
  return (
    <Wrapper>
      <div className="search-input">
        <i className="iconfont icon-sousuo"></i>
        <input
          type="text"
          className="input"
          placeholder="请输入商品名称进行搜索"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {value ? (
          <i className="iconfont icon-chahao" onClick={() => setValue("")}></i>
        ) : null}
        <span className="separate" />
        <span className="right-text">搜索</span>
      </div>
    </Wrapper>
  );
}
