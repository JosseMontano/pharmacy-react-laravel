import "../App.css";

import styled from "styled-components";
import Footer from "../components/footer";

import Home from "../components/homeC";
import Doctors from "../components/doctors";
import ServicesC from "../components/servicesC";
import About from "../components/about";

const Container = styled.div`
  font-size: 10%;
`;

function Index() {
  return (
    <Container>
      <Home />

      <ServicesC />

      <About />

      <Doctors />
      <Footer />
    </Container>
  );
}

export default Index;
