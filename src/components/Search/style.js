import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.5rem;
  .search-input {
    display: flex;
    align-items: center;
    position: relative;
    height: 2rem;
    border: 0.1rem solid #07c160;
    border-radius: 1rem;
    .icon-sousuo {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
    .input {
      width: 11rem;
      height: 100%;
      border: 0;
      background-color: transparent;
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
    .icon-chahao {
      margin-left: 0.3rem;
      color: rgba(0, 0, 0, 0.3);
    }
    .separate {
      position: absolute;
      right: 2.8rem;
      height: 0.8rem;
      width: 1px;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .right-text {
      position: absolute;
      right: 0.8rem;
      color: #07c160;
      font-size: 0.8rem;
    }
  }
`;
