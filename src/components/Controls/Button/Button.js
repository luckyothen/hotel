import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: ${({ py }) => py || "0.7rem"} ${({ px }) => px || "1.7rem"};
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bgColor }) => bgColor || "#F8C11D"};
  outline: none;
  border: none;
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: 0.2s ease-in-out all;
  font-size: ${({ fontSize }) => fontSize || "1rem"};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default function Button({
  children,
  bgColor,
  color,
  py,
  px,
  fontWeight,
  fontSize,
}) {
  return (
    <ButtonStyled
      bgColor={bgColor}
      color={color}
      py={py}
      px={px}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {children}
    </ButtonStyled>
  );
}
