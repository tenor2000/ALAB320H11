import styled from "styled-components";

const Box = styled.div`
  padding: 10px;
  border: 1px solid white;
`;

export default function Header({ title }: { title: string }) {
  return <Box>{title}</Box>;
}
