import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useParams, Link } from "react-router-dom";
import { getIdea } from "@/api/request";
import { IdeaDetailWrapper, NavIconArea, PirceWrapper, Wrapper } from "./style";
import BuyFooter from "./BuyFooter";
import {
  NavBar,
  Space,
  Swiper,
  Avatar,
  Rate,
  Image,
  ImageViewer,
} from "antd-mobile";

export default function IdeaDetail() {
  const result = new URLSearchParams(location.search);
  const id = result.get("id");
  const [idea, setIdea] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    (async () => {
      let { data } = await getIdea();
      data = data.filter((item) => item.id == id);
      setIdea(data);
      const { imgs } = data[0];
      setImgData(imgs);
      console.log(imgs, "imgs");
    })();
  }, []);
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <NavIconArea>
          <i className="iconfont icon-sousuo" />
        </NavIconArea>
        <NavIconArea>
          <i className="iconfont icon-gengduo-hengxiang" />
        </NavIconArea>
      </Space>
    </div>
  );
  const backIcon = (
    <NavIconArea>
      <i className="iconfont icon-fanhui " />
    </NavIconArea>
  );

  const back = () => {
    history.go(-1);
  };

  const items = imgData.map((imgData, index) => (
    <Swiper.Item key={index}>
      <img
        className="swiper-image"
        src={imgData.img}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      />
    </Swiper.Item>
  ));
  return (
    <IdeaDetailWrapper>
      <NavBar
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
          width: "100%",
        }}
        right={right}
        backArrow={backIcon}
        onBack={back}
      />
      <Swiper autoplay loop>
        {items}
      </Swiper>
      <PirceWrapper>
        <div className="price-area">
          <div className="price">
            <span className="price-icon">￥</span>
            89
          </div>
          <span className="sold">已售10</span>
        </div>
        <div className="describe">
          <p>
            CDN
            服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。
          </p>
        </div>
        <div className="service">
          <div className="service-item">
            <i className="iconfont icon-gouxuan"></i>
            退货包运费
          </div>
          <div className="service-item">
            <i className="iconfont icon-gouxuan"></i>
            7天无理由退货
          </div>
          <div className="service-item">
            <i className="iconfont icon-gouxuan"></i>
            质量保证
          </div>
        </div>
      </PirceWrapper>

      <Wrapper>
        <div className="delivery">
          <div className="line">
            送至：
            <div className="right ">
              <i className="iconfont icon-dingwei"></i> 云南大学呈贡校区
            </div>
            <i className="iconfont icon-xiangyoujiantou"></i>
          </div>
          <div className="line line2">
            运费：
            <div className="right">全场包邮</div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="comment">
          <div className="comment-header">
            商品评价(1000)
            <div className="rate">
              好评率
              <span style={{ fontWeight: 700, fontSize: "0.7rem" }}>
                {" "}
                99.7%
              </span>
              <i className="iconfont icon-xiangyoujiantou"></i>
            </div>
          </div>
          <div className="comment-item">
            <div className="item-header">
              <div className="userinfo">
                <Avatar
                  style={{
                    "--border-radius": "50%",
                    "--size": "2rem",
                  }}
                  src={
                    "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  }
                />
                <div className="user-text">
                  <span style={{ marginLeft: "0.1rem" }}>username</span>
                  <Rate
                    readOnly
                    value={4.5}
                    allowHalf
                    className="rate-star"
                    style={{
                      "--star-size": "0.6rem",
                    }}
                  />
                </div>
              </div>
              <span className="time">01-08</span>
            </div>
            <div className="comment-content">
              啊是大家大愛睡覺的愛睡覺的啊是多久啊是的as as
              as发多少发多少方面安康菲尼克斯的
              <div className="imgs">
                <Space wrap>
                  <Image
                    lazy
                    onClick={() => setVisible(true)}
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                </Space>
                <ImageViewer
                  image={
                    "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                  }
                  visible={visible}
                  onClose={() => {
                    setVisible(false);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="comment-item">
            <div className="item-header">
              <div className="userinfo">
                <Avatar
                  style={{
                    "--border-radius": "50%",
                    "--size": "2rem",
                  }}
                  src={
                    "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  }
                />
                <div className="user-text">
                  <span style={{ marginLeft: "0.1rem" }}>username</span>
                  <Rate
                    readOnly
                    value={4}
                    className="rate-star"
                    style={{
                      "--star-size": "0.6rem",
                    }}
                  />
                </div>
              </div>
              <span className="time">01-08</span>
            </div>
            <div className="comment-content">
              啊是大家大愛睡覺的愛睡覺的啊是多久啊是的as as
              as发多少发多少方面安康菲尼克斯的
              <div className="imgs">
                <Space wrap>
                  <Image
                    lazy
                    onClick={() => setVisible(true)}
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                    }
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 4 }}
                  />
                </Space>
                <ImageViewer
                  image={
                    "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
                  }
                  visible={visible}
                  onClose={() => {
                    setVisible(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="more">
          查看全部评价 <i className="iconfont icon-xiangyoujiantou"></i>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="effect">
          <div className="header">
            <span className="left-icon" />
            功能作用:
          </div>
          <div className="describe">
            大数据库撒娇的啊阿斯加德看到奥斯福你记你非得Joi
            看了就就仅仅考虑叫你看了
          </div>
          <br />

          <div className="header">
            <span className="left-icon" />
            用剂用量:
          </div>
          <div className="describe">
            每次1毫升，萨达设计费的数据即忘记时间埃及我就发看了就埃及垃圾筐了那里可能缴纳难理解
          </div>
        </div>
      </Wrapper>
      <BuyFooter />
    </IdeaDetailWrapper>
  );
}
