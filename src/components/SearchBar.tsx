import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid white;
`;

export default function SearchBar() {
  return (
    <Input
      type="text"
      placeholder="Search..."
      className="search"
      id="search"
    ></Input>
  );
}
