import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .buy-btn {
    margin: 0 0.5rem;
    height: 1.8rem;
    font-size: 0.7rem;
  }
  .amount {
    font-size: 1rem;
    color: #ff5000;
  }
`;
