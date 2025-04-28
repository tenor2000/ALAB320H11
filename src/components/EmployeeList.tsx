import EmployeeListItem from "./EmployeeListItem";
import styled from "styled-components";

const Box = styled.div`
  padding: 10px;

  border: 1px solid white;
  // width: 100%;
`;

type Employee = {
  pic: string | null;
  name: string;
  title: string;
};

export default function EmployeeList() {
  const employees: Employee[] = [
    { pic: "JK", name: "James King", title: "President and Ceo" },
    { pic: "JT", name: "Julie Taylor", title: "VP of Marketing" },
    { pic: "EL", name: "Eugene Lee", title: "CFO" },
    { pic: "JW", name: "John Williams", title: "VP of Engineering" },
    { pic: "RM", name: "Ray Moore", title: "VP of Sales" },
    { pic: "PJ", name: "Paul Jones", title: "QA Manager" },
  ];

  return (
    <Box>
      {employees.map((employee) => (
        <EmployeeListItem key={employee.name} {...employee} />
      ))}
    </Box>
  );
}
