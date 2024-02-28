import { atom, useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import Button from "./Button/Button";

export const countAtom = atom(0);

export default function Jotai() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <Container>
      <h2>{count}</h2>
      <Button onClick={() => setCount((pre) => pre + 1)}>+</Button>
      <Button onClick={() => setCount((pre) => pre - 1)}>-</Button>
    </Container>
  );
}

const Container = styled.div`
  margin: 50px auto;
  width: 300px;
  border: 1px solid #000;
`;
