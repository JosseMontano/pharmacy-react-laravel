import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { lightColor } from "../../styles/globals";
import { Btn, ContentHome, H3, P } from "../../styles/welcome";
const Container = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 10rem;
`;
const Index = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

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
        <Btn
          onClick={() => {
            navigate("/login");
          }}
        >
          {" "}
          Inicia sesion <span></span>
        </Btn>
      </ContentHome>
    </Container>
  );
};

export default Index;
