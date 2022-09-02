import React from "react";
import styled from "styled-components";
import { ContentHome, H3, P, Btn } from "../../styles/welcome";
import { lightColor } from "../../styles/globals";
const Container = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 10rem;
`;
const Index = () => {
  return (
    <Container>
      <ContentHome>
        <H3 lightColor={lightColor}>Bienvenido a Montaños Seguros</H3>
        <P lightColor={lightColor}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem
          vero? Magnam, est laboriosam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem sed autem vero? Magnam, est laboriosam! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero?
          Magnam, est laboriosam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!
        </P>
        <Btn href="#">
          {" "}
          contactanos <span></span>
        </Btn>
      </ContentHome>
    </Container>
  );
};

export default Index;
