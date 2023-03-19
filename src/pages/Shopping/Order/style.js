import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 2.2rem;
  padding-bottom: 2.5rem;
  .address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .address-info {
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 0.5rem;
      }
      .detail {
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
  .delivery {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .time {
      font-size: 0.7rem;
      font-weight: 700;
    }
  }
  .price {
    color: #ff5000;
  }
  .specs {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 0.5rem;
    .name {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
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
  }
  .fare {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .fare-price {
      color: black;
    }
  }
  .subtotal {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .sub-price {
      font-size: 0.9rem;
    }
  }
`;
