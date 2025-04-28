import Header from "./Header";
import ContactListItem from "./ContactListItem";
import styled from "styled-components";
import EmployeeProfile from "./EmployeeProfile";

const Box = styled.div`
  padding: 5px;
  border: 1px solid white;
  flex: 1;
`;

type ContactMethod = {
  method: string;
  content: string;
};

export default function EmployeePage() {
  const contactMethods: ContactMethod[] = [
    { method: "Call Office", content: "781-000-0001" },
    { method: "Call Mobile", content: "781-000-0002" },
    { method: "SMS", content: "781-000-0003" },
    { method: "Email", content: "jtaylor@perscholas.org" },
  ];
  return (
    <Box>
      <Header title="Employee" />
      <div>
        <EmployeeProfile pic="JT" name="Julie Taylor" title="VP of Marketing" />
        {contactMethods.map(({ method, content }) => {
          return <ContactListItem method={method} content={content} />;
        })}
      </div>
    </Box>
  );
}
