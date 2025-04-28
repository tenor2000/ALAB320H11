import styled from "styled-components";

type Contact = {
  method: string;
  content: string;
};

const Box = styled.div`
  padding: 5px;
  border: 1px solid white;
  text-align: left;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

export default function ContactListItem({ method, content }: Contact) {
  return (
    <Box>
      <Paragraph>{method}</Paragraph>
      <Paragraph>{content}</Paragraph>
    </Box>
  );
}
