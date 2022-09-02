import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  padding-top: 2rem;
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;
  color: var(--light-color);
  border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
`;
const Span = styled.span`
  color: var(--green);
`;

const Credit = () => {
  return (
    <Container>
      {" "}
      Todos los <Span>derechos</Span> reservados{" "}
    </Container>
  );
};

export default Credit;
