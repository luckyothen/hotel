import styled, { css } from "styled-components";
import { device } from "../../../themes/MediaDefaults";

const ButtonStyled = styled.button`
  padding: ${({ py }) => py || "0.7rem"} ${({ px }) => px || "1.7rem"};
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bgColor }) => bgColor || "#F8C11D"};
  outline: none;
  border: none;
  border-radius: 1px;
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  text-transform: uppercase;
  display: ${({ displayButton }) => displayButton || "inline-block"};
  /* align-items: center; */
  text-align: center;
  /* justify-content: center; */
  transition: 0.2s ease-in-out all;
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  /* align-self: center; */
  width: ${({ width }) => width || ""};

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    `}

  ${({ responsive }) =>
    responsive &&
    css`
      @media only screen and ${device.sm} {
        width: 100% !important;
        display: block;
      }
    `}
`;

export default function Button({
  children,
  bgColor,
  color,
  py,
  px,
  fontWeight,
  fontSize,
  width,
  hover,
  type,
  responsive,
  displayButton,
}) {
  const btnType = type || "submit";

  return (
    <ButtonStyled
      bgColor={bgColor}
      color={color}
      py={py}
      px={px}
      fontWeight={fontWeight}
      fontSize={fontSize}
      width={width}
      hover={hover}
      type={btnType}
      responsive={responsive}
      displayButton={displayButton}
    >
      {children}
    </ButtonStyled>
  );
}
