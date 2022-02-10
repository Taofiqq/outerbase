import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { IoIosMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [index, setIndex] = useState(0);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo>
          <Link to="/">
            <ImageLogo src={logo} alt="outerbase-logo" />
          </Link>
        </Logo>

        <LinksContainer>
          <AboutLink index={index} onClick={() => setIndex(0)}>
            <LinkStyle to="/">About</LinkStyle>
          </AboutLink>
          <ContactLink index={index} onClick={() => setIndex(1)}>
            <LinkStyle to="/contact">Contact</LinkStyle>
          </ContactLink>
        </LinksContainer>

        <ResponsiveButton onClick={handleClick}>
          {click ? <GrClose size={25} /> : <IoIosMenu size={25} />}
        </ResponsiveButton>
      </NavbarWrapper>
      {/*
       */}

      {click && (
        <>
          <ResLinksContainer>
            <ResAboutLink index={index} onClick={() => setIndex(0)}>
              <LinkStyle to="/">About</LinkStyle>
            </ResAboutLink>
            <ResContactLink index={index} onClick={() => setIndex(1)}>
              <LinkStyle to="/contact">Contact</LinkStyle>
            </ResContactLink>
          </ResLinksContainer>
        </>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  padding: 0px 96px;
  margin-top: 33px;

  @media screen and (max-width: 840px) {
    padding: 0px 35px;
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  @media screen and (max-width: 350px) {
    width: 120px;
  }
`;

const ImageLogo = styled.img`
  width: 225px;
  height: 48px;

  @media screen and (max-width: 450px) {
    width: 180px;
  }
`;
const AboutLink = styled.div`
  border-bottom: ${({ index }) => (index === 0 ? "4px solid #000000" : "none")};
  margin-right: 96px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1070px) {
    display: none;
  }
`;

const ContactLink = styled.div`
  border-bottom: ${({ index }) => (index === 1 ? "4px solid #000000" : "none")};
`;

const LinkStyle = styled(Link)`
  color: ${({ index }) => (index === 1 ? "yellow" : "#000000")};
`;
const ResponsiveButton = styled.div`
  cursor: pointer;
  @media screen and (min-width: 1071px) {
    display: none;
  }
`;

const ResLinksContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;

  @media screen and (min-width: 1070px) {
    display: none;
  }
`;

const ResAboutLink = styled.div`
  border-bottom: ${({ index }) => (index === 0 ? "4px solid #000000" : "none")};
  margin-bottom: 2rem;
`;
const ResContactLink = styled.div`
  border-bottom: ${({ index }) => (index === 1 ? "4px solid #000000" : "none")};
`;
export default Navbar;
