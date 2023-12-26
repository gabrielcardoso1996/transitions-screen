import { useArrayContext } from "../utils/ArrayProvider";
import {
  Container,
  Paragraph,
  Section,
  Subtitle,
  Title,
  Wrapper,
} from "./styled";

export const DoneSection = () => {
  const { food, dayWeek } = useArrayContext();
  return (
    <Section id="done">
      <Wrapper>
        <Container>
          <Title>Estarei ai</Title>
          <Subtitle>Combinado, {food} na {dayWeek}, as 8?</Subtitle>
          <Paragraph> Não vou errar</Paragraph>
        </Container>
      </Wrapper>
    </Section>
  );
};
