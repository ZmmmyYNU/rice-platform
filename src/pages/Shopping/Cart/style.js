import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2.2rem;
  padding-bottom: 2.5rem;
  .manage {
    position: relative;
    margin-top: 0.5rem;
    height: 1rem;
    span {
      position: absolute;
      right: 0.5rem;
    }
  }
  .cart-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    .describe {
      height: 3.2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0.5rem;
      .price-count {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          color: #ff5000;
        }
      }
    }
  }
`;
