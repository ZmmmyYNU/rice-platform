import React, { useState } from "react";
import { useLocation } from "react-router";
import { Wrapper } from "./style";
import TopNavBar from "../../../components/NavBar";
import { ImageUploader, Image, Button } from "antd-mobile";
export default function Identify() {
  let { state = "" } = useLocation();
  const [fileList, setFileList] = useState([]);

  async function mockUpload(file) {
    console.log(file, "file");
    return {
      url: URL.createObjectURL(file),
    };
  }
  return (
    <div>
      {state.type === "illness" ? (
        <>
          <TopNavBar backgroundColor="#fff" height="2.2rem">
            病害
          </TopNavBar>
          <Wrapper>
            <ImageUploader
              value={fileList}
              onChange={(e) => {
                setFileList(e);
              }}
              upload={mockUpload}
            />
          </Wrapper>
        </>
      ) : (
        <>
          <TopNavBar backgroundColor="#fff" height="2.2rem">
            虫害
          </TopNavBar>
          <Wrapper>
            <ImageUploader
              value={fileList}
              onChange={(e) => {
                setFileList(e);
              }}
              upload={mockUpload}
            />
          </Wrapper>
        </>
      )}
    </div>
  );
}
