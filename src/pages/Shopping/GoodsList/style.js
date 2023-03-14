import styled from "styled-components";
export const Wrapper = styled.div`
  flex: 1;
  overflow: scroll;
  .idea-item {
    overflow: hidden;
    background-color: #f6f6f6;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    ul {
      li {
        float: left;
        width: 8.5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        background-color: #fff;
        border-radius: 0.1rem;
        .img {
          width: 100%;
          height: 10rem;
          margin-bottom: 0.1rem;
        }
        .idea-body {
          padding: 0 0.7rem;
          p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0.7rem 0 0.2rem 0;
            font-size: 0.65rem;
          }
          .ideaitem-footer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .tag {
              display: inline-block;
              padding: 0 0.1rem;
              font-size: 0.4rem;
              color: rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(0, 0, 0, 0.3);
            }
            .price {
              font-size: 0.8rem;
              margin: 0.2rem 0;
              font-weight: 500;
              .price-icon {
                font-size: 0.4rem;
              }
            }
          }
        }
      }
    }
  }
  .flex {
    display: flex;
  }
`;
