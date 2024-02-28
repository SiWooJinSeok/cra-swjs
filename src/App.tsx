import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Nav />
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;
