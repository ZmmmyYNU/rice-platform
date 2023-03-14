import styled from "styled-components";
export const Wrapper = styled.div`
  .footer {
    width: 100%;
    height: 2.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: 0.1rem;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.1rem 0;
    .icon-box {
      margin-left: 0.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.4rem;
    }
    .add-cart {
      margin-left: 1rem;
      .btn {
        width: 5rem;
        font-size: 0.7rem;
        margin-left: 1.2rem;
      }
    }
  }
`;
