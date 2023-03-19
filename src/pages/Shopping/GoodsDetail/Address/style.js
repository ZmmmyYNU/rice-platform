import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2.2rem;
  padding-bottom: 2.5rem;
  .card-item {
    width: 100%;
    display: flex;
    align-items: center;
    .detail {
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .dim,
      .info {
        font-size: 0.5rem;
        color: rgba(0, 0, 0, 0.5);
      }
      .area {
        margin: 0.2rem 0;
        display: flex;
        font-weight: 700;
      }
      .default {
        margin-right: 0.2rem;
        padding: 0.1rem 0.2rem;
        font-size: 0.5rem;
        border-radius: 0.1rem;
        color: #fff;
        background-color: #07c160;
      }
    }
    .icon-bianji {
      margin-left: 5.5rem;
    }
  }
`;
export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  padding: 0.2rem 0.5rem;
  background: #fff;
`;
