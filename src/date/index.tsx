import {
  Container,
  ContainerDaysWeek,
  DayWeekWrapper,
  LabelDayWeek,
  Section,
  Subtitle,
  Wrapper,
  Line,
} from "./styled";
import { useArrayContext } from "../utils/ArrayProvider";

const daysWeeks = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
];

export const DateSection = () => {
  const { setDayWeek, dayWeek } = useArrayContext();
  const selectOpetion = (day: string) => {
    setDayWeek(day);
    window.location.href = "#done";
  }

  return (
    <Section id="date">
      <Wrapper>
        <Container>
          <Subtitle>Selecione um dia</Subtitle>
        </Container>
        <ContainerDaysWeek>
          {daysWeeks.map((day) => (
            <DayWeekWrapper onClick={() => selectOpetion(day)}>
              <LabelDayWeek  active={dayWeek === day}>{day}</LabelDayWeek >
              <Line></Line>
            </DayWeekWrapper>
          ))}
        </ContainerDaysWeek>
      </Wrapper>
    </Section>
  );
};
