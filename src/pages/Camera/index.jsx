import React, { useState } from "react";
import { Wrapper } from "./style";
import { ImageUploader, Image, Button } from "antd-mobile";
import TopNavBar from "../../components/NavBar";
import { Link, Outlet } from "react-router-dom";
export default function Camera() {
  return (
    <>
      <TopNavBar backgroundColor="#fff" height="2.2rem">
        识农害
      </TopNavBar>
      <Wrapper>
        <div className="title">请选择你要识别的农害类别</div>
        <div className="select">
          <div className="img insect">
            <Image
              src={
                "https://img1.baidu.com/it/u=502904787,2241516818&fm=253&fmt=auto&app=138&f=JPEG?w=737&h=500"
              }
              width="8rem"
              height="8rem"
              fit="cover"
              style={{ borderRadius: 4 }}
            />
            <Link to="/identify" state={{ type: "insect" }}>
              <Button
                color="primary"
                style={{
                  marginTop: "0.5rem",
                }}
              >
                识虫害
              </Button>
            </Link>
          </div>
          <div className="img plant">
            <Image
              src={
                "https://img1.baidu.com/it/u=2422999356,2578954662&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=400"
              }
              width="8rem"
              height="8rem"
              fit="cover"
              style={{ borderRadius: 4, marginLeft: "0.5rem" }}
            />
            <Link to="/identify" state={{ type: "illness" }}>
              <Button
                color="primary"
                style={{
                  marginTop: "0.5rem",
                }}
              >
                识病害
              </Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
