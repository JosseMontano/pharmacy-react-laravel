import styled from "styled-components";
import BoxA from "./boxA";

const Container = styled.div``;
const FooterBoxContainerBoxH3 = styled.h3`
  font-size: 1rem;
  color: var(--black);
  padding: 1rem 0;
`;

interface Params {
  h3: string;
  data: {
    titulo: string;
  }[];
}

const Box = (v: Params) => {
  return (
    <Container>
      <FooterBoxContainerBoxH3>{v.h3}</FooterBoxContainerBoxH3>
      {v.data.map((va, i) => (
        <BoxA key={i} {...va} />
      ))}
    </Container>
  );
};

export default Box;
