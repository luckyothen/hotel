import styled from "styled-components";
import Button from "../Controls/Button/Button";
import Branding from '../Branding/Branding';
import { Calendar } from "@styled-icons/ionicons-outline/Calendar";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 4rem 0;
`;

const ListGroup = styled.nav`
  list-style: none;
`;

const ListGroupItem = styled.li`
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  transition: 0.2s color ease-in;

  &:not(:last-of-type) {
    margin-right: 4rem;
  }

  &:hover {
    cursor: pointer;
    color: #ffb300;
  }
`;

// const Branding = styled.h1`
//   font-size: 2.3rem;
//   font-weight: 700;
//   text-transform: uppercase;
// `;

const CalendarIcon = styled(Calendar)`
  color: white;
  margin-right: 0.4rem;
`;

const ArrowDownIcon = styled(ArrowIosDownward)`
  color: white;
  margin-left: 0.4rem;
  font-weight: 800;
`;

const StarIcon = styled(StarFill)`
  color: #ffb300;

  &:not(:last-of-type) {
    margin-right: 0.1rem;
  }
`;


export default function Nav() {
  return (
    <>
      <NavWrapper>

        <Branding>Zogo Hotel</Branding>

        <ListGroup>
          <ListGroupItem>
            Home <ArrowDownIcon size="16" />
          </ListGroupItem>
          <ListGroupItem>
            Rooms <ArrowDownIcon size="16" />
          </ListGroupItem>
          <ListGroupItem>
            Contact Us <ArrowDownIcon size="16" />
          </ListGroupItem>
          <ListGroupItem>
            <Button hover="hover">
              <CalendarIcon size="14" />
              Book Online
            </Button>
          </ListGroupItem>
        </ListGroup>
      </NavWrapper>
    </>
  );
}
