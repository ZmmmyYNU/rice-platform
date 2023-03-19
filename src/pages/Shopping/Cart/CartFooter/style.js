import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  .check-all {
    display: flex;
    align-items: center;
    .checkbox {
      margin-right: 0.5rem;
    }
  }
  .subtotal {
    display: flex;
    align-items: center;
    .price {
      color: #ff5000;
      margin: 0 0.5rem;
    }
    .buy-btn {
      width: 4.5rem;
      height: 1.8rem;
      font-size: 0.7rem;
    }
  }
  .del-btn {
    width: 4.5rem;
    height: 1.8rem;
    font-size: 0.7rem;
    color: var(--adm-color-primary);
  }
`;
