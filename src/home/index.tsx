import { Container, Paragraph, Section, Subtitle, Title, Wrapper } from "./styled";

export const HomeSection = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
            <Title>Para onde vamos ?</Title>
          <Paragraph>Escolha uma das opções abaixo</Paragraph>
        </Container>
      </Wrapper>
    </Section>
  );
};
