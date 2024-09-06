import styled from "styled-components";

export const ButtonStyles = styled.button`
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 2rem;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
`;
