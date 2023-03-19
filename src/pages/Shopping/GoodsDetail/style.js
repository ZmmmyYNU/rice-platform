import styled from "styled-components";
export const IdeaDetailWrapper = styled.div`
  padding-bottom: 2.5rem;

  .idea-detail-header {
    padding-top: 0.1rem;
    display: flex;
    justify-content: space-between;
    .idea-detail-header-left,
    .idea-detail-header-right {
      display: flex;
      align-items: center;
      .fa-angle-left {
        font-size: 1.5rem;
        margin: 0 1rem;
      }
      .userimg {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        margin-right: 0.6rem;
        margin-top: 0.35rem;
      }
      .username {
        font-size: 0.5rem;
        font-weight: 700;
      }
    }
    .idea-detail-header-right {
      .concern {
        color: red;
        font-weight: 600;
        border: 1px solid red;
        text-align: center;
        width: 50px;
        height: 22px;
        border-radius: 12px;
      }
      .icon-zhuanfa {
        margin: 0.5rem;
        font-size: 17px;
      }
      .fa-ellipsis-v {
        font-size: 1rem;
        margin: 0 1rem;
      }
    }
  }
  .swiper-image {
    width: 100%;
    height: 15rem;
  }
  .content {
    font-size: 0.7rem;
    margin: 1.5rem 0;
    padding: 0 1rem;
  }
`;

export const NavIconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  .iconfont {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const PirceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  border-radius: 0.3rem;
  background-color: #fff;
  overflow: hidden;
  .price-area {
    margin: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      margin: 0 0.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: #ff5000;
      .price-icon {
        color: #ff5000;
        font-size: 0.6rem;
      }
    }
    .sold {
      font-size: 0.5rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .describe {
    margin: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .service {
    display: flex;
    align-items: center;
    height: 2rem;
    background-color: rgba(245, 245, 245, 0.6);
    .service-item {
      margin-left: 0.5rem;
      font-size: 0.5rem;
      color: rgba(0, 0, 0, 0.5);
      .iconfont {
        margin-right: 0.2rem;
        font-size: 0.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  background-color: #fff;
  .delivery {
    .line {
      position: relative;
      display: flex;
      font-size: 0.6rem;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 0.5rem;

      .right {
        margin-left: 0.5rem;
        color: black;
      }
      .icon-dingwei {
        font-size: 0.7rem;
      }
      .icon-xiangyoujiantou {
        position: absolute;
        right: 0;
      }
    }
    .line2 {
      margin-bottom: 0;
    }
  }

  .comment {
    .comment-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      .rate {
        font-size: 0.4rem;
        .icon-xiangyoujiantou {
          font-size: 0.6rem;
        }
      }
    }
    .comment-item {
      padding: 0.5rem 0;
      border-bottom: 1px solid #ccc;
      &:last-child {
        border-bottom: 0;
      }
      .item-header {
        display: flex;
        justify-content: space-between;

        .userinfo {
          display: flex;
          align-items: center;
          .user-text {
            display: flex;
            flex-direction: column;
            margin-left: 0.3rem;
          }
        }
        .time {
          color: rgba(0, 0, 0, 0.4);
          font-size: 0.7rem;
        }
      }
    }
    .comment-content {
      margin-top: 0.5rem;
      .imgs {
        margin-top: 0.5rem;
      }
    }
  }
  .more {
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    color: rgba(0, 0, 0, 0.5);
    .icon-xiangyoujiantou {
      font-size: 0.6rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .effect {
    .header {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 700;
      .left-icon {
        display: inline-block;
        margin-right: 0.3rem;
        height: 0.8rem;
        width: 0.2rem;
        background-color: #07c160;
      }
    }
    .describe {
      padding-left: 0.5rem;
      margin-top: 0.2rem;
      font-size: 0.6rem;
    }
  }
`;
