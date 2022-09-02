import React from "react";
import styled from "styled-components";

import Heading from "./heading";
import Row from "./row";

const About = styled.div`
  padding: 40px 9% 40px 9%;
`;

const Index = () => {
  return (
    <About>
      <Heading />
      <Row />
    </About>
  );
};

export default Index;
