import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  width: 600px;
`;

function App() {
  return (
    <Div>
      <HomePage />
      <EmployeePage />
    </Div>
  );
}

export default App;
