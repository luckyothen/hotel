import styled from "styled-components";

const Icon = styled.i`
  font-size: 0.9rem;
  color: ${({ color }) => color || "#fff"};
`;

export default function IconButton({ icon, color }) {
  return <Icon className={icon} color={color}></Icon>;
}
