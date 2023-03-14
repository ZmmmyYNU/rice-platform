import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useParams, Link } from "react-router-dom";
import { getIdea } from "@/api/request";
import { IdeaDetailWrapper } from "./style";
import Swiper from "swiper";
import IdeaDetailFooter from "./IdeaDetailFooter";
// import IdeaDetailContent from './IdeaDetailContent';

export default function IdeaDetail() {
  return <div>IdeaDetail</div>;
}
