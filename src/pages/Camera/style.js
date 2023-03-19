import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
  .select {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .img {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.8rem;
    }
  }
`;
