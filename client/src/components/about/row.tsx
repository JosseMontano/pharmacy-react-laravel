import React from 'react'
import styled from 'styled-components';
import { ContentHome, Btn, H3, P, Spam } from "../../styles/welcome";
import { lightColor } from "../../styles/globals";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Row = () => {
  return (
    <Container>
    <ContentHome>
      <H3 lightColor={lightColor}>Somos un hospital con 20 años de exp</H3>
      <P lightColor={lightColor}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
        ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit
        tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
        ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit
        tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
      </P>
      <Btn href="#">
        {" "}
        leer mas <Spam></Spam>{" "}
      </Btn>
    </ContentHome>
  </Container>
  )
}

export default Row