import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: #016a70;
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffffdd;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #ffffdd;
  }
`;

export const Extra = styled("section")`
  background: #016a70;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #ffffdd;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #ffffdd;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: #8bc3a3;
    text-underline-position: under;
    text-decoration: #8bc3a3 wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #ffffdd;
  max-width: fit-content;
  border-bottom: 1px solid #ffffdd;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #8bc3a3;
    color: #8bc3a3;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: 45%;
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: #8bc3a3;
    }
  }
  svg {
    fill: #ffffdd;
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffffdd;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffffdd;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
