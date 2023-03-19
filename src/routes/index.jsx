// 独立配置文件
import { useState, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Idea = lazy(() => import("../pages/Home/Idea"));
const Shopping = lazy(() => import("../pages/Shopping"));
const Mine = lazy(() => import("../pages/Mine"));
const Xiaoxi = lazy(() => import("../pages/Xiaoxi"));
const GoodsDetail = lazy(() => import("../pages/Shopping/GoodsDetail"));
const Order = lazy(() => import("../pages/Shopping/Order"));
const Cart = lazy(() => import("../pages/Shopping/Cart"));
const OrderList = lazy(() => import("../pages/Shopping/OrderList"));
const Address = lazy(() => import("../pages/Shopping/GoodsDetail/Address"));
const More = lazy(() => import("../components/More"));
const Search = lazy(() => import("../components/Search"));
const Camera = lazy(() => import("../pages/Camera"));
const Identify = lazy(() => import("../pages/Camera/Identify"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<Home />}>
        <Route path="idea" element={<Idea />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="mine" element={<Mine />} />
        <Route path="xiaoxi" element={<Xiaoxi />} />
      </Route>
      <Route path="/goodsdetail" element={<GoodsDetail />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/submitorder" element={<Order />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/orderlist" element={<OrderList />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/more" element={<More />}></Route>
      <Route path="/camera" element={<Camera />}></Route>
      <Route path="/identify" element={<Identify />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};
