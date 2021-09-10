import styled from "styled-components";

const ButtonStyled = styled.button` 
  padding: 0.7rem 1.7em;
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bgColor }) => bgColor || "#F8C11D"};
  outline: none;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-align:center;
  justify-content: center;
  transition:.2s ease-in-out all;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

export default function Button({ children, bgColor, color }) {

  return <ButtonStyled bgColor={bgColor} color={color}>{children}</ButtonStyled>;
}
