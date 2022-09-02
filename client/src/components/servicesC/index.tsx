import React from "react";
import styled from "styled-components";
import { boxShadow } from "../../styles/globals";
import { Heading } from "../../styles/welcome";
import Box from "./box";

const Services = styled.section<{ boxShadow: string }>``;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

const Index = () => {
  let data = [
    {
      feacture: "Consultas Gratuitas",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.",
      txtBtb: "aprender mas",
    },
    {
      feacture: "Ambulancias 24/7",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.",
      txtBtb: "aprender mas",
    },
    {
      feacture: "Doctores experimentado",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.",
      txtBtb: "aprender mas",
    },
  ];
  return (
    <Services boxShadow={boxShadow}>
      <Heading />
      <BoxContainer>
        {data.map((v, i) => (
          <Box key={i} {...v} />
        ))}
      </BoxContainer>
    </Services>
  );
};

export default Index;



