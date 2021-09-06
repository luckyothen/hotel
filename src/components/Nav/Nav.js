import styled from "styled-components";
import Button from "../Controls/Button/Button";
// import IconButton from "../Controls/IconButton/IconButton";
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

const Branding = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  text-transform: uppercase;
`;

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
    margin-right: 0.2rem;
  }
`;

const BrandingWrapper = styled.div`
  position: relative;
`;

const StarsWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 42px;
  right: 0;
`;

export default function Nav() {
  return (
    <>
      <NavWrapper>
        <BrandingWrapper>
          <Branding>Zogo Hotel</Branding>
          <StarsWrapper>
            <StarIcon size="7" />
            <StarIcon size="7" />
            <StarIcon size="7" />
            <StarIcon size="7" />
            <StarIcon size="7" />
          </StarsWrapper>
        </BrandingWrapper>
        <ListGroup>
          <ListGroupItem>
            Home <ArrowDownIcon size="14" />
          </ListGroupItem>
          <ListGroupItem>
            Rooms <ArrowDownIcon size="14" />
          </ListGroupItem>
          <ListGroupItem>
            Contact Us <ArrowDownIcon size="14" />
          </ListGroupItem>
          <ListGroupItem>
            <Button>
              <CalendarIcon size="14" />
              Book Online
            </Button>
          </ListGroupItem>
        </ListGroup>
      </NavWrapper>
    </>
  );
}
