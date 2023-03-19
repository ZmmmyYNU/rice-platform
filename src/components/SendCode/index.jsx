import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";

export default function SendCode() {
  const [second, setSecond] = useState(59); //倒计时秒数
  const [btnDisabled, setBtnDisabled] = useState(false); //按钮是否可点击，false可点击
  const [timer, setTimer] = useState(undefined);

  // 初始化时清除定时器
  useEffect(() => {
    window.clearInterval(timer);
    return () => window.clearInterval(timer);
  }, []);

  // 监听秒数的变动
  useEffect(() => {
    if (second <= 0) {
      window.clearInterval(timer);
      setTimer(null);
      setBtnDisabled(false);
      setSecond(59);
    }
  }, [second]);

  // 发送验证码，开启倒计时
  const sendCode = () => {
    const interval = setInterval(() => {
      setSecond((pre) => pre - 1);
    }, 1000);
    setTimer(interval);
    setBtnDisabled(true);
  };
  return (
    <Wrapper>
      <div
        className="get-code"
        onClick={() => {
          if (!btnDisabled) {
            sendCode();
          }
        }}
      >
        {btnDisabled ? `重新发送(${second})` : "获取验证码"}
      </div>
    </Wrapper>
  );
}
