import styled from "styled-components";

const FooterBoxContainerBoxA = styled.a`
  display: block;
  font-size: 1rem;
  color: var(--light-color);
  padding: 1rem 0;
`;

const FooterBoxContainerBoxI = styled.i`
  padding-right: 0.5rem;
  color: var(--green);
`;

interface Params {
  titulo: string;
}

const BoxA = (va: Params) => {
  return (
    <FooterBoxContainerBoxA href="#">
      {" "}
      <FooterBoxContainerBoxI></FooterBoxContainerBoxI>
      {va.titulo}
    </FooterBoxContainerBoxA>
  );
};

export default BoxA;
