import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url("https://img1.baidu.com/it/u=304597017,930506954&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=890");
  background-size: cover;
  .glass {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    /* 主要内容 */
    background: rgba(0, 0, 0, 0.5);
    /* 模糊大小就是靠的blur这个函数中的数值大小 */
    backdrop-filter: blur(0.4rem);
  }
  .form {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    padding: 0.5rem;
    .to-login {
      font-size: 0.5rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
