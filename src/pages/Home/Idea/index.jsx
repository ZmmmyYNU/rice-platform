import React from "react";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { getIdea } from "@/api/request";
import IdeaItem from "./IdeaItem";
import IdeaTop from "./IdeaTop";
import styled from "styled-components";

export default function Idea() {
  const [idea, setIdea] = useState([]);
  useEffect(() => {
    (async () => {
      let { data } = await getIdea();
      console.log(data);
      setIdea(data);
    })();
  }, []);

  return (
    <>
      <Header />
      {/* <IdeaTop /> */}
      <IdeaItem idea={idea} />
    </>
  );
}
