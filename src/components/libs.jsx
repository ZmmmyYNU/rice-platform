import { SpinLoading } from "antd-mobile";
import styled from "styled-components";

export const FullScreenLoading = () => (
  <FullScreenWrapper>
    <SpinLoading />
  </FullScreenWrapper>
);

const FullScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
