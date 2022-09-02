import styled from "styled-components";


export const ContentHome = styled.div`
  flex: 1 1 45rem;
`;

export const H3 = styled.h3<{ lightColor: string }>`
  font-size: 1.5rem;
  color: var(--black);
  line-height: 1.8;
  text-shadow: ${(props) => props.lightColor};
`;
export const P = styled.p<{ lightColor: string }>`
  font-size: 1rem;
  color: ${(props) => props.lightColor};
  line-height: 1.8;
  padding: 1rem 0;
`;
export const Btn = styled.a`
display: inline-block;
margin-top: 1rem;
padding: 0.5rem;
padding-left: 1rem;
border: var(--border);
border-radius: 0.5rem;
box-shadow: var(--box-shadow);
color: var(--green);
cursor: pointer;
font-size: 1rem;
background: #fff;
&:hover {
  background: var(--green);
  color: #fff;
}
`;
export const Spam = styled.span`
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  background: var(--green);
  color: #fff;
  margin-left: 0.5rem;
`;
export const Heading = styled.h1`
text-align: center;
padding-bottom: 2rem;
text-shadow: var(--text-shadow);
text-transform: uppercase;
color: var(--black);
font-size: 2rem;
letter-spacing: 0.4rem;
& .span {
  text-transform: uppercase;
  color: var(--green);
}
`;