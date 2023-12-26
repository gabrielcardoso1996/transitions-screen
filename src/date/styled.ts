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
    height: auto;
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
`;

export const Paragraph = styled.p`
  color: ${Colors.black};
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Montserrat", serif;
`;

export const ContainerDaysWeek = styled.div`
  overflow: hidden;
  padding-bottom: 0;
  background-color: ${Colors.tertiary};
  border-radius: 1.39em;
  padding: 2.29em 2.78em 8.33em;
  position: relative;
  overflow: hidden;
`;

interface DayWeekProps {
  active?: boolean;
}

export const DayWeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0;

`;

export const Line = styled.div`
  border-bottom: 1px solid ${Colors.quaternary};
  width: 100%;
`;

export const LabelDayWeek = styled.label<DayWeekProps>`
  color: ${Colors.primary};
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.08em;

  ${({ active }) =>
    active &&
    `
    font-weight: bold;
    transition: all 0.1s ease-in-out;
    font-size: 1.8rem;
  `}
`;
