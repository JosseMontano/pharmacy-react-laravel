import React from "react";
import { Spam, Heading as HeaderContainer } from "../../styles/welcome";

const Head = () => {
  return (
    <HeaderContainer>
      {" "}
      Nuestros <Spam>doctores</Spam>{" "}
    </HeaderContainer>
  );
};

export default Head;
