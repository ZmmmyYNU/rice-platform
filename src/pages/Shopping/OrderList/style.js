import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2.2rem;
  .specs {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 0.5rem;
    .name {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-left: 0.5rem;
      .title {
        font-size: 0.7rem;
        font-weight: 700;
      }
      .one-price {
        margin-top: 0.5rem;
        font-size: 0.6rem;
      }
    }
    .count {
      display: flex;
      align-items: center;
    }
  }
  .pay-for {
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem 0;
    font-size: 0.65rem;
    .total {
      color: rgba(0, 0, 0, 0.3);
      margin-right: 0.5rem;
    }
  }
  .more {
    display: inline-block;
    width: 3rem;
    font-size: 0.65rem;
    color: #ff3141;
  }
`;
