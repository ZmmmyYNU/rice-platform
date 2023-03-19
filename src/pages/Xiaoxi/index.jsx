import React, { useState } from "react";
import { FullScreenLoading } from "../../components/libs";
import { CapsuleTabs, List, PullToRefresh } from "antd-mobile";
function getNextData() {
  const ret = [];
  for (let i = 0; i < 18; i++) {
    ret.unshift(i);
  }
  return ret;
}
export default function Xiaoxi() {
  const [data, setData] = useState(() => getNextData());
  return (
    <div>
      <PullToRefresh
        onRefresh={async () => {
          await new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 2000);
          });
          setData([...getNextData(), ...data]);
        }}
      >
        <>
          {data.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </>
      </PullToRefresh>
    </div>
  );
}
