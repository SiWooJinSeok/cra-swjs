import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import styled from "styled-components";
import { useAtom } from "jotai";
import { countAtom } from "./components/Jotai";

export default function App() {
  const [count] = useAtom(countAtom);
  console.log(count);
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
