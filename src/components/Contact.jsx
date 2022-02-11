import styled from "styled-components";
import phone from "../img/phone.svg";
import message from "../img/mesaage.svg";
import location from "../img/location.svg";

const Contact = () => {
  return (
    <ContactContainer>
      <Header>Get in Touch</Header>

      <ContactOne>
        <Phone>
          <ImageLogo src={phone} />
          <Number>+234 808 123 4567</Number>
        </Phone>
        <Email>
          <ImageLogo src={message} />
          <EmailAddress>ADMIN@MARBLEPOINTS.COM</EmailAddress>
        </Email>
      </ContactOne>
      <ContactTwo>
        <Address>
          <ImageLogo src={location} />
          <AddressLine>
            10, HUGHES AVENUE, <br /> ALAGOMEJI, YABA, LAGOS, <br /> LAGOS
            STATE, NIGERIA
          </AddressLine>
        </Address>
      </ContactTwo>

      <FooterContainer>© 2022, Outerbase, All rights reserved.</FooterContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin-top: 119px;
  margin-bottom: 64px;

  @media screen and (max-width: 290px) {
    font-size: 1rem;
    font-weight: bold;
  }
`;
const ContactOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
`;

const ImageLogo = styled.img`
  width: 21px;
  height: 26px;
  margin-right: 3rem;

  @media screen and (max-width: 290px) {
    width: 22px;
    height: 22px;
    margin-right: 2.13rem;
  }
`;
const Phone = styled.div`
  width: 367px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 840px) {
    margin-right: 56px;
  }
  @media screen and (max-width: 840px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 400px) {
    width: 263px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }

  @media screen and (max-width: 290px) {
    width: 233px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }
  @media screen and (max-width: 240px) {
    width: 183px;
    height: 60px;
  }
`;
const Number = styled.p`
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 240px) {
    font-size: 8px;
  }
`;

const Email = styled.div`
  width: 367px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    width: 263px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }

  @media screen and (max-width: 290px) {
    width: 233px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }
  @media screen and (max-width: 240px) {
    width: 183px;
    height: 60px;
  }
`;
const EmailAddress = styled.p`
  text-transform: lowercase;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 240px) {
    font-size: 8px;
  }
`;
const ContactTwo = styled.div`
  width: 367px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    width: 263px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
    margin-top: 50px;
  }
  @media screen and (max-width: 290px) {
    width: 233px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }
  @media screen and (max-width: 240px) {
    width: 183px;
    height: 60px;
  }
`;

const Address = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddressLine = styled.p`
  text-transform: capitalize;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 240px) {
    font-size: 8px;
  }
`;

const FooterContainer = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.246165px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 110px;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;
export default Contact;
