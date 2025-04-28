import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import styled from "styled-components";

const Box = styled.div`
  padding: 5px;
  margin: 0;
  border: 1px solid white;
  flex: 1;
`;

export default function HomePage() {
  return (
    <Box>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </Box>
  );
}
