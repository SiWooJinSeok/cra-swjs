import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <Btn onClick={onClick} type="button">
      {children}
    </Btn>
  );
}
const Btn = styled.button`
  margin-left: 10px;
  margin-bottom: 20px;
`;
