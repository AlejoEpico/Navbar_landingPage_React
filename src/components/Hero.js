import React from "react";
// import styled from "styled-components";
import styled, { createGlobalStyle } from "styled-components";
import BgImg from "../assets/boston-dynamics-spot.jpg";

const Section = styled.section`
  position: relative;
  background-image: url(${BgImg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 70px); /* subtract the height of the navbar */
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 10px;
`;

const Titlte = styled.p`
  font-size: 55px;
  color: white;
  font-weight: 400;
  vertical-align: top;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: white;
  line-height: 30px;
  margin-top: 58px;
  margin-left: 800px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 28px;
  margin-left: 810px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0f223f, #2f5870, #f8b500);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0, 42, 177/12%);
`;

const Hero = () => {
    return (
      <div>
        <GlobalStyle />
        <Section>
          <Content>
            <Left>
              <Titlte>
                "Spot from Boston Dynamics: <br /> A Versatile and Valuable Robot
                for the Future"
              </Titlte>
              <Desc>
                Spot, the robot from Boston Dynamics, is an incredible machine.
                Its four legs allow it to navigate even the toughest terrain, and
                its advanced sensors and software make it capable of performing a
                wide range of tasks. Whether it's inspecting dangerous
                environments, delivering packages,
                <span>
                  or just entertaining people, Spot is proving to be a versatile
                  and valuable member of the robot community. As technology
                  continues to advance, it's exciting to think about what other
                  amazing robots we might see in the future.
                </span>{" "}
              </Desc>
              <Button href="https://www.bostondynamics.com/spot-buy">
                <span>
                  Get Your Own Spot
                </span>
              </Button>
            </Left>
          </Content>
        </Section>
      </div>
    );
  };

export default Hero;
