import styled from "styled-components";
import Colors from "../utils/colors";

export const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: ${Colors.background};
  height: 100vh;
  @media(max-width: 768px) {
    height: auto;
  }
`;

export const Wrapper = styled.div`
  // padding-bottom: 8vh;
  padding-left: 2.78em;
  padding-right: 2.78em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media(max-width: 768px) {
    padding-left: 1.39em;
    padding-right: 1.39em;
    height: auto;
  }
`;

export const Title = styled.h1`
  padding-left: 2.78em;
  padding-right: 2.78em;
  color: ${Colors.primary};
  font-size: 4rem;
  margin: 0;
  //uppercase
  text-transform: uppercase;
  @media(max-width: 768px) {
    padding: 1em;
    text-align: center;
  }
`;

export const ContainerTables = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerGrid = styled.div`
  grid-auto-columns: 1fr;
  display: grid;
  grid-column-gap: 0.97em;
  grid-row-gap: 0.97em;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media(max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

interface ICard {
  active: boolean;
}

export const GridCard = styled.a<ICard>`
  width: 100%;
  margin-bottom: 0;
  overflow: hidden;
  max-width: 100%;
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  border-bottom: 0.13em solid ${Colors.quaternary};
  ${props => props.active && `
    border-bottom: 0.13em solid ${Colors.tertiary};
  `}
`;

export const CardPhoto = styled.div`
  width: 100%;
  height: 17.43em;
  border-radius: 1.04em;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BottomCardWrapper = styled.div`
  width: 100%;
  margin-top: 1.39em;
`;

export const CardTitle = styled.h3`
  color: ${Colors.secondary};
  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 0.97em;
  font-size: 1em;
  font-weight: 700;
`;
