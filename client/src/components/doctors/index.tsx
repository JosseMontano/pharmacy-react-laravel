import React from "react";
import styled from "styled-components";
import imgDoctor1 from "../../assets/Index/doc-1.jpg";
import imgDoctor2 from "../../assets/Index/doc-2.jpg";
import imgDoctor3 from "../../assets/Index/doc-3.jpg";

import Box from "./box";
import Head from "./head";
const Doctors = styled.section``;

const Headd = styled.h1``;

const Boxcontainr = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
`;

let data = [
  {
    src: imgDoctor1,
    h3: "Vilmer",
    p: "Cirujano",
  },
  {
    src: imgDoctor2,
    h3: "Hendrick",
    p: "Dermatologo",
  },
  {
    src: imgDoctor3,
    h3: "Jose",
    p: "Pediatra",
  },
];

const Index = () => {
  return (
    <Doctors>
      <Head />

      <Boxcontainr>
        {data.map((v, i) => (
          <Box key={i} {...v} />
        ))}
      </Boxcontainr>
    </Doctors>
  );
};

export default Index;
