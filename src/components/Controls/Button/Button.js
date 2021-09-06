import styled from "styled-components";

const ButtonGeneral = styled.button`
  padding: 0.7rem 1.7em;
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bgColor }) => bgColor || "#ffb300"};
  outline: none;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-align:center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export default function Button({ children, bgColor, color }) {
  return <ButtonGeneral bgColor={bgColor} color={color}>{children}</ButtonGeneral>;
}
