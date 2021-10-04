import React from "react";
import styled from "styled-components";
import Button from "../Controls/Button/Button";

const BookingBarStyled = styled.div`
  background-color: #fff;
  padding: 2rem 1rem;
  display: flex;

  margin-top: 1.5rem;
  > * {
    width: 100%;
  }
`;

const InputStyled = styled.input`
  background-color: #e7e5e4;
  color: #939393;
  outline: none;
  border: 1px solid #e0dfde;
  padding: 0.7rem;
  text-transform: uppercase;
  margin-right: 1rem;
  cursor: pointer;
  &::placeholder {
    color: #939393;
  }
`;

const SelectStyled = styled.select`
  background-color: #e7e5e4;
  color: #939393;
  outline: none;
  border: 1px solid #e0dfde;
  padding: 0.7rem;
  text-transform: uppercase;
  margin-right: 1rem;
  cursor: pointer;

  &::placeholder {
    color: #939393;
  }
`;

export default function BookingBar() {
  return (
    <BookingBarStyled>
      <InputStyled
        type="email"
        name="email"
        placeholder="Email Address"
      ></InputStyled>
      <SelectStyled name="email" placeholder="Room Type">
        <option value="">Room Type</option>
        <option value="singleroom">Single Room</option>
        <option value="doubleroom">Double Room</option>
        <option value="deluxe">Deluxe Room</option>
      </SelectStyled>
      <InputStyled
        type="date"
        name="arrivaldate"
        placeholder="Arrival Date"
      ></InputStyled>
      <InputStyled
        type="date"
        name="departuredate"
        placeholder="Departure Date"
      ></InputStyled>
      <SelectStyled name="occupants" placeholder="Occupants">
        <option value="">Occupants</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </SelectStyled>
      <Button bgColor="#1DC1F8" py="1rem" px="1rem" hover="hover">
        Book A Room
      </Button>
    </BookingBarStyled>
  );
}
