import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .content {
    width: 100%;
    min-height: 20rem;
    padding-bottom: 2.5rem;
    position: absolute;
    top: -0.8rem;
    left: 0;
    z-index: 13;
  }
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background-color: #fff;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    .tabs-item {
      padding-top: 0.2rem;
      height: 80%;
      margin-left: 1rem;
      font-size: 0.8rem;
      color: rgba(0, 0, 0, 0.6);
      &:first-child {
        margin-left: 0;
      }
    }
    .active {
      border-bottom: 0.1rem solid #07c160;
      color: black;
    }
  }
`;
