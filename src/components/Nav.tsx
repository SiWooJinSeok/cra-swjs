import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <Container>
      <Link to="/">홈으로</Link>
      <Link to="/jotai">jotai</Link>
      <Link to="/axios">axios</Link>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
