import styled from "styled-components";
import { H3, P } from "../../styles/welcome";

import { lightColor } from "../../styles/globals";
const Container = styled.div`
  text-align: center;
  background: #fff;
  border-radius: 0.5rem;
  border: var(--border);
  box-shadow: var(--box-shadow);
  padding: 2rem;
`;

const Spane = styled.span``;

const Iimage = styled.img`
  height: 20rem;
  border: var(--border);
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

interface Params {
  src: string;
  h3: string;
  p: string;
}
const Box = (v: Params) => {
  return (
    <Container>
      <Iimage src={v.src} alt=""></Iimage>
      <H3 lightColor={lightColor}>{v.h3}</H3>
      <P lightColor={lightColor}>{v.p}</P>
    </Container>
  );
};

export default Box;
