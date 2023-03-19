import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 13rem;
  background-image: url("https://img1.baidu.com/it/u=1639090634,2115207643&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=374");
  background-size: cover;
  color: #fff;
  .glass {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    /* 主要内容 */
    background: rgba(0, 0, 0, 0.5);
    /* 模糊大小就是靠的blur这个函数中的数值大小 */
    backdrop-filter: blur(0.2rem);
  }
  .top {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
  }
  .header {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .userinfo {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    .user-txt {
      margin-left: 0.5rem;
      .username {
        margin-bottom: 0.2rem;
        font-size: 0.8rem;
        font-weight: 700;
      }
      .number {
        font-size: 0.4rem;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
  .info {
    padding: 0.5rem;
    font-size: 0.5rem;
    .sex {
      width: 1rem;
      height: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.4rem;
      margin-top: 0.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      .iconfont {
        font-size: 0.5rem;
      }
    }
  }
  .setting {
    padding: 0.5rem;
    display: flex;
    justify-content: flex-end;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid #fff;
      color: #fff;
      margin-left: 0.6rem;
      border-radius: 0.8rem;
      height: 1.6rem;
    }
    .iconfont {
      font-size: 0.9rem;
    }
  }
`;
