import React from "react";
import styled from "styled-components";
import Box from "./box";
import Credit from "./credit";

const Container = styled.section``;
const FooterBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 2rem;
`;

const Index = () => {
  let dataFather = [
    {
      h3: "Nuestros servicios",
      data: [
        {
          titulo: "Servicio dental",
        },
        {
          titulo: "Terapias",
        },
        {
          titulo: "cardiologia",
        },
        {
          titulo: "diagnostico",
        },
        {
          titulo: "ambulancia 24/7",
        },
      ],
    },
    {
      h3: "Informacion de contacto",
      data: [
        {
          titulo: "76584246",
        },
        {
          titulo: "4442153",
        },
        {
          titulo: "montañoseguros@gmail.com",
        },
      ],
    },
    {
      h3: "Siguenos",
      data: [
        {
          titulo: "facebook",
        },
        {
          titulo: "twitter",
        },
        {
          titulo: "instagram",
        },
        {
          titulo: "instagram",
        },
        {
          titulo: "pinterest",
        },
      ],
    },
  ];
  return (
    <Container>
      <FooterBoxContainer>
        {dataFather.map((v, i) => (
          <Box key={i} {...v} />
        ))}
      </FooterBoxContainer>

     <Credit />

    </Container>
  );
};

export default Index;
