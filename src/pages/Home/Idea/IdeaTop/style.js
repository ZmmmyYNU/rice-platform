import styled from "styled-components";
export const IdeaTopWrapper = styled.div`
  .swiper-container {
    /*把主要的框写好*/
    border-top: 1px solid DarkGray;
    width: 350px;
    overflow: hidden;
    .swiper-slide {
      text-align: center;
      margin: 2px -15px;
      width: 20px;
      overflow-x: scroll;
    }
  }
`;
