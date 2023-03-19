import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  .adm-list-body {
    border: 0;
  }
  .title {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
  }
  .switch {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    .change {
      display: flex;
      align-items: center;
      .iconfont {
        margin-right: 0.2rem;
      }
    }
  }
  .get-code {
    font-size: 0.7rem;
  }
  .submit {
    border-radius: 2rem;
    font-size: 0.8rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
