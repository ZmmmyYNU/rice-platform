import styled from "styled-components";
export const ShopTopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  .search-input {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    width: 13rem;
    height: 1.5rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 1.5rem;
  }
  span {
    margin-left: 0.5rem;
  }
  .icon-sousuo,
  span {
    color: rgba(0, 0, 0, 0.3);
  }
  .icon-left {
    font-size: 1rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`;
