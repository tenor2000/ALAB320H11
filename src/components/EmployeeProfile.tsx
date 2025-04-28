import styled from "styled-components";

type Employee = {
  pic: string | null;
  name: string;
  title: string;
};

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  padding: 10px;

  border: 1px solid white;
  display: flex;
`;

const NamePlate = styled.div`
  padding: 5px;
  border-radius: 5px;
  text-align: left;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

export default function EmployeeProfile({ pic, name, title }: Employee) {
  return (
    <Box>
      <Avatar>{pic}</Avatar>
      <NamePlate>
        <Paragraph>{name}</Paragraph>
        <Paragraph>{title}</Paragraph>
      </NamePlate>
    </Box>
  );
}
