import React from "react";
import styled from "styled-components";
import { Btn, Spam } from "../../styles/welcome";

const Container = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  border: var(--border);
  padding: 2.5rem;
`;
const FaNotesMedical = styled.i`
  color: var(--green);
  font-size: 2rem;
  padding-bottom: 0.5rem;
`;

const H3Consultas = styled.h3`
  color: var(--black);
  font-size: 1rem;
  padding: 1rem 0;
`;

const PLorenInsun = styled.p`
  color: var(--light-color);
  font-size: 1rem;
  line-height: 2;
`;

const About = styled.section``;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

interface Params {
  feacture: string;
  text: string;
  txtBtb: string;
}

const Box = (v: Params) => {
  return (
    <Container>
      <FaNotesMedical></FaNotesMedical>
      <H3Consultas>{v.feacture}</H3Consultas>
      <PLorenInsun>{v.text}</PLorenInsun>
      <Btn>
        {v.txtBtb}
        <Spam></Spam>
      </Btn>
    </Container>
  );
};

export default Box;
