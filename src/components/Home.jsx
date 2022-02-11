import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../img/logo.svg";
// import person from "../img/person.png";

export default function Home() {
  return (
    <HomeContainer>
      {/* <Hero>
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
          <Curve></Curve>
          <HeroImg src={person} alt="" />
        </Right>
      </Hero> */}

      {/* <Industries>
        <IndustryWrapper>
          <IndustryText>Industries Served</IndustryText>
          <IndustryContainer>
            <IndustryBox>
              <Icon>
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_32_370)">
                    <path
                      d="M23.4 16.625H0.599984C0.268484 16.625 -1.54721e-05 16.8907 -1.54721e-05 17.2188V18.4062C-1.54721e-05 18.7343 0.268484 19 0.599984 19H23.4C23.7315 19 24 18.7343 24 18.4062V17.2188C24 16.8907 23.7315 16.625 23.4 16.625ZM3.02061 12.6643C3.25611 12.9181 3.58686 13.0621 3.93298 13.0618L8.82823 13.0551C9.21456 13.0546 9.59533 12.9641 9.93973 12.7909L20.8507 7.31166C21.8535 6.80809 22.7524 6.08928 23.364 5.14781C24.0506 4.09094 24.1252 3.32611 23.8541 2.7858C23.5837 2.24512 22.9264 1.84805 21.6697 1.76715C20.5504 1.69516 19.437 1.98684 18.4342 2.49004L14.7401 4.34514L6.53886 1.29994C6.44025 1.23421 6.32569 1.19573 6.20702 1.18849C6.08835 1.18124 5.96988 1.2055 5.86386 1.25875L3.39823 2.49709C2.99811 2.69785 2.90136 3.22629 3.20436 3.55582L9.06261 7.19625L5.19223 9.14004L2.47911 7.78666C2.38564 7.74002 2.28239 7.71579 2.17771 7.71592C2.07303 7.71605 1.96984 7.74054 1.87648 7.7874L0.37161 8.54332C-0.0198904 8.74 -0.123015 9.25285 0.162735 9.58535L3.02061 12.6643Z"
                      fill="#9AB3F5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_32_370">
                      <rect width="24" height="19" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Icon>
              <IconText>Aviation</IconText>
            </IndustryBox>
            <IndustryBox>
              <Icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5H10.414L8.707 3.293C8.61426 3.2 8.50406 3.12624 8.38273 3.07596C8.2614 3.02568 8.13134 2.99986 8 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V7C22 5.897 21.103 5 20 5Z"
                    fill="#9AB3F5"
                  />
                </svg>
              </Icon>
              <IconText>General Contracts</IconText>
            </IndustryBox>
            <IndustryBox>
              <Icon>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.37498 14.781L6.62498 13.219L2.60098 10L6.62498 6.781L5.37498 5.219L0.374981 9.219C0.257826 9.31268 0.163249 9.43152 0.098254 9.56671C0.033259 9.70191 -0.000488281 9.84999 -0.000488281 10C-0.000488281 10.15 0.033259 10.2981 0.098254 10.4333C0.163249 10.5685 0.257826 10.6873 0.374981 10.781L5.37498 14.781ZM14.625 5.219L13.375 6.781L17.399 10L13.375 13.219L14.625 14.781L19.625 10.781C19.7421 10.6873 19.8367 10.5685 19.9017 10.4333C19.9667 10.2981 20.0005 10.15 20.0005 10C20.0005 9.84999 19.9667 9.70191 19.9017 9.56671C19.8367 9.43152 19.7421 9.31268 19.625 9.219L14.625 5.219ZM12.976 1.216L8.97598 19.216L7.02298 18.782L11.023 0.781998L12.976 1.216Z"
                    fill="#9AB3F5"
                  />
                </svg>
              </Icon>
              <IconText>Information Technology</IconText>
            </IndustryBox>
            <IndustryBox>
              <Icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 9L12 1L2 9V11H4V21H9V17C9 16.2044 9.31607 15.4413 9.87868 14.8787C10.4413 14.3161 11.2044 14 12 14C12.7956 14 13.5587 14.3161 14.1213 14.8787C14.6839 15.4413 15 16.2044 15 17V21H20V11H22V9Z"
                    fill="#9AB3F5"
                  />
                </svg>
              </Icon>
              <IconText>Real Estate</IconText>
            </IndustryBox>
            <IndustryBox>
              <Icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                    fill="#9AB3F5"
                  />
                </svg>
              </Icon>
              <IconText>Security</IconText>
            </IndustryBox>
          </IndustryContainer>
        </IndustryWrapper>
      </Industries> */}

      <InformationContainer>
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
  overflow-x: hidden;
`;

// const Hero = styled.section`
//   display: flex;

//   @media screen and (max-width: 900px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;
// const Left = styled.div`
//   @media screen and (min-width: 900px) {
//     flex: 2;
//     display: flex;
//     flex-direction: column;
//     // padding-left: 224px;
//   }

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 116px;
// `;
// const HeroList = styled.p`
//   font-style: normal;
//   font-weight: bold;
//   font-size: 18px;
//   line-height: 0px;
//   letter-spacing: 0.04em;
//   color: #7579e7;

//   @media screen and (max-width: 900px) {
//     width: 296px;
//     height: 40px;
//     font-family: Nunito;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 14px;
//     line-height: 20px;
//     text-align: center;
//     letter-spacing: 0.04em;
//     color: #7579e7;
//   }
// `;
// const HeroText = styled.h1`
//   font-style: normal;
//   font-weight: normal;
//   font-size: 62px;
//   line-height: 68px;
//   display: flex;
//   align-items: center;
//   text-align: left;
//   margin-top: 32px;
//   color: #000000;

//   @media screen and (max-width: 900px) {
//     width: 320px;
//     height: 176px;
//     font-family: Nunito;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 36px;
//     line-height: 44px;
//     display: flex;
//     align-items: center;
//     text-align: center;
//     color: #000000;
//   }
// `;
// const HeroButton = styled.button`
//   width: 250px;
//   height: 65px;
//   background: #7579e7;
//   border: 2px solid #ffffff;
//   box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 16px;
//   color: #ffffff;
//   font-size: 20px;
//   font-weight: bold;
//   cursor: pointer;
//   margin-top: 40px;

//   @media screen and (max-width: 900px) {
//     margin-top: 40px;
//   }
// `;

// const LinkStyle = styled(Link)`
//   color: white;
// `;
// const Right = styled.div`
//   @media screen and (min-width: 900px) {
//     flex: 1;
//     position: relative;
//     margin-top: 13rem;
//     margin-right: 124px;
//   }
// `;

// const HeroImg = styled.img`
//   width: 516px;
//   height: 803px;
// `;
// const Curve = styled.div`
//   width: 947px;
//   height: 599px;
//   background-color: #e5e5e5;
//   border-radius: 299.5px 0px 0px 0px;
//   position: absolute;
//   top: 20rem;
//   right: -15rem;
//   z-index: -10;

//   @media screen and (max-width: 900px) {
//     display: none;
//   }
// `;

// const Industries = styled.div`
//   width: 100%;
//   height: 700px;
//   margin-right: 3rem;
//   z-index: 100;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   @media screen and (min-width: 760px) {
//     width: 1296px;
//     height: 200px;
//     background: #fff;
//     box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.08);
//     border-radius: 24px;
//     margin-top: -0.1rem;
//     margin-left: 5rem;
//     position: relative;
//     padding-left: 56px;
//     z-index: 30;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//   }
// `;

// const IndustryWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   @media screen and (min-width: 900px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//   }
// `;
// const IndustryContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;

//   @media screen and (max-width: 900px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// `;
// const IndustryText = styled.h1`
//   font-style: normal;
//   font-size: 28px;
//   line-height: 48px;
//   display: flex;
//   align-items: center;
//   color: #000000;
// `;
// const IndustryBox = styled.div`
//   width: 203px;
//   height: 62px;
//   background: #cfdbfb;
//   border-radius: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 10px;
//   margin-right: 26px;

//   @media screen and (max-width: 900px) {
//     margin-bottom: 33px;
//   }
// `;
// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   background: #fff;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 24px;
// `;
// const IconText = styled.p`
//   font-size: 10px;
// `;

const InformationContainer = styled.section`
  background-color: #fff;
  width: 100%;
  height: 60vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.25rem;

  @media screen and (max-width: 250px) {
    height: 40vh;
  }
  @media screen and (max-width: 1224px) {
    height: 35vh;
  }
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
