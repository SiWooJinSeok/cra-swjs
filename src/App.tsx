import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <h1>hello SWJS</h1>
    </Container>
  );
}

const Container = styled.div`
  margin: 100px auto;
  border: 1px solid #000;
  width: 300px;
  height: 300px;
  text-align: center;
`;
