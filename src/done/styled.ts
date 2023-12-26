import styled from "styled-components";
import Colors from "../utils/colors";

export const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: ${Colors.background};
  height: 100vh;
`;

export const Wrapper = styled.div`
  //padding-bottom: 8vh;
  padding-left: 2.78em;
  padding-right: 2.78em;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media(max-width: 768px) {
    padding-left: 1.39em;
    padding-right: 1.39em;
  }
`;

export const Container = styled.div`
  margin-left: 15em;
  justify-content: center;
  @media(max-width: 768px) {
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  color: ${Colors.primary};
  font-size: 4.5rem;
  margin-bottom: 1.08em;
  //uppercase
  text-transform: uppercase;
  @media(max-width: 768px) {
    padding: 1em;
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  color: ${Colors.quaternary};
  font-size: 3rem;
  text-transform: uppercase;

  @media(max-width: 768px) {
    padding: 1em;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  color: ${Colors.primary};
  font-size: 1.5rem;
`;
