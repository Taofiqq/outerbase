import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../img/logo.svg";
import person from "../img/person.png";
import aviation from "../img/plane.svg";
import file from "../img/file.svg";
import code from "../img/code.svg";
import house from "../img/house.svg";
import security from "../img/security.svg";

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Left>
          <HeroList>
            General Contracts | Project Co-ordination | Procurement | Trading
          </HeroList>
          <HeroText>
            The general contractor <br /> ensuring total customer <br />{" "}
            satisfaction
          </HeroText>
          <HeroButton>
            <LinkStyle to="/contact">Get In Touch</LinkStyle>
          </HeroButton>
        </Left>

        <Right>
          <HeroImg src={person} alt="" />
        </Right>
      </Hero>

      <InformationContainer>
        <Industries>
          <IndustryWrapper>
            <IndustryText>Industries Served</IndustryText>

            <IndustryContainer>
              <IndustryBox>
                <Icon>
                  <IndustryImage src={aviation} />
                </Icon>
                <IconText>Aviation</IconText>
              </IndustryBox>
              <IndustryBox>
                <Icon>
                  <IndustryImage src={file} />
                </Icon>
                <IconText>General Contracts</IconText>
              </IndustryBox>
              <IndustryBox>
                <Icon>
                  <IndustryImage src={code} />
                </Icon>
                <IconText>Information Technology</IconText>
              </IndustryBox>
              <IndustryBox>
                <Icon>
                  <IndustryImage src={house} />
                </Icon>
                <IconText>Real Estate</IconText>
              </IndustryBox>
              <IndustryBox>
                <Icon>
                  <IndustryImage src={security} />
                </Icon>
                <IconText>Security</IconText>
              </IndustryBox>
            </IndustryContainer>
          </IndustryWrapper>
        </Industries>
        <InformationWrapper>
          <ParaOne>
            Incorporated in 2022, Outerbase is a specialist in the
            InformationTechnology and General Contracts Industry.
            {/* Hello */}
          </ParaOne>
          {/* <Line></Line>
          <Line2></Line2> */}
          <ParaTwo>
            Outerbase caters to the unique requirements ofits users until 100%
            satisfaction is achieved
          </ParaTwo>
        </InformationWrapper>

        <Line3></Line3>
        <Line4></Line4>
      </InformationContainer>
      <LineContainer></LineContainer>

      <ContactWrapper>
        <ContactContainer>
          <Text>
            Contact Outerbase today for all your ICT, Real Estate <br />
            and General Contract needs
          </Text>
          <ContactButton>
            <ContactLink to="/contact">Get In Touch</ContactLink>
          </ContactButton>
        </ContactContainer>
        <Square></Square>
        <Square2></Square2>
      </ContactWrapper>

      <FooterWrapper>
        <FooterContainer>
          <FooterImage src={logo2} alt="outerbase-img" />
          <FooterText>© 2022, Outerbase, All rights reserved.</FooterText>
        </FooterContainer>
      </FooterWrapper>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5.06rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin-top: 116px;

  @media screen and (min-width: 760px) {
    flex: 2;
  }
`;
const HeroList = styled.p`
  height: 40px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #7579e7;
  margin-bottom: 1.56rem;
`;
const HeroText = styled.h1`
  height: 176px;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  @media screen and (max-width: 299px) {
    font-size: 20px;
    line-height: 32px;
  }
`;
const HeroButton = styled.button`
  width: 250px;
  height: 65px;
  background: #7579e7;
  border: 2px solid #ffffff;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 40px;

  @media screen and (max-width: 299px) {
    width: 200px;
  }
`;

const LinkStyle = styled(Link)`
  color: white;
`;
const Right = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media screen and (min-width: 760px) {
    flex: 1;
  }
`;

const HeroImg = styled.img`
  width: 24.8rem;
  height: 40.13rem;
  object-fit: contain;
  z-index: -10;

  @media screen and (max-width: 299px) {
    width: 20rem;
    height: 30rem;
  }
`;

const InformationContainer = styled.section`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2.25rem;
  z-index: -10;

  @media screen and (min-width: 760px) {
    height: 50vh;
  }
`;

const Industries = styled.div`
  padding-left: 1.38rem;
  padding-right: 1.38rem;
  margin-bottom: 6.63rem;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

const IndustryWrapper = styled.div`
  width: 346px;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding-top: 2.75rem;
  padding-bottom: 2.75rem;
  margin-top: -22rem;

  @media screen and (min-width: 760px) {
    width: 36rem;
    height: 15rem;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.08);
    // margin-left: 6rem;
    // margin-right: 6rem;
  }
`;
const IndustryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
const IndustryText = styled.h1`
  font-style: normal;
  font-size: 20px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 2.44rem;
  text-align: center;
`;
const IndustryBox = styled.div`
  width: 203px;
  height: 62px;
  background: #cfdbfb;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin-bottom: 33px;
`;
const IndustryImage = styled.img`
  width: 24px;
  height: 24px;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;
const IconText = styled.p`
  font-size: 11px;
`;
const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ParaOne = styled.p`
  font-size: 1.25rem;
  width: 15.75rem;
  text-align: center;

  @media screen and (max-width: 250px) {
    font-size: 0.5rem;
  }
`;
const ParaTwo = styled.p`
  font-size: 1rem;
  width: 15rem;
  text-align: center;
  margin-top: 8.06rem;

  @media screen and (max-width: 250px) {
    font-size: 0.5rem;
    width: 7.75rem;
  }
`;
const LineContainer = styled.div`
  position: relative;
`;
// const Line = styled.div`
//   width: 5.25rem;
//   border: 1px dashed #cfdbfb;
//   transform: rotate(-90deg);
//   position: absolute;
// `;
// const Line2 = styled.div`
//   width: 5.25rem;
//   border: 1px dashed #cfdbfb;
//   transform: rotate(-90deg);
//   position: absolute;
//   top: 1rem;
//   background: red;
// `;
const Line3 = styled.div`
  width: 130px;
  height: 0px;
  border: 1px dashed #cfdbfb;
  transform: rotate(180deg);
  position: absolute;
  left: 53rem;
  top: 17rem;

  @media screen and (max-width: 1960px) {
    display: none;
  }
`;
const Line4 = styled.div`
  width: 150px;
  height: 0px;
  border: 1px dashed #cfdbfb;
  transform: rotate(-90deg);
  position: absolute;
  left: 56.5rem;
  top: 21.7rem;

  @media screen and (max-width: 1960px) {
    display: none;
  }
`;
const Square = styled.div`
  width: 110px;
  height: 192px;
  background: url("../square.png") no-repeat;
  position: absolute;
  // background-color: red;
  left: 0.1rem;
  top: 101rem;
  z-index: 100;
`;
const Square2 = styled.div`
  width: 110px;
  height: 192px;
  background: url("../square.png") no-repeat;
  position: absolute;
  right: 0.1rem;
  bottom: -75rem;
  z-index: 100;
`;

const ContactWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: #101417;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 680px) {
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: relative;
`;

const Text = styled.p`
  width: 1163px;
  font-weight: normal;
  font-size: 28px;
  line-height: 64px;
  color: #ffffff;
  text-align: center;

  @media screen and (max-width: 680px) {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    width: 311px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  @media screen and (max-width: 325px) {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    width: 201px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;
const ContactButton = styled.button`
  width: 200px;
  height: 50px;
  background: rgba(255, 255, 255, 0.12);
  border: 2px solid #ffffff;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
  color: #ffffff;
  margin-top: 2rem;

  @media screen and (max-width: 240px) {
    width: 150px;
  }
`;

const ContactLink = styled(NavLink)`
  color: white;
`;
const FooterWrapper = styled.footer`
  width: 100%;
  height: 209px;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FooterImage = styled.img`
  width: 14rem;
  height: 3rem;

  @media screen and (max-width: 240px) {
    width: 7rem;
  }
`;
const FooterText = styled.p`
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.246165px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 1.5rem;
`;
