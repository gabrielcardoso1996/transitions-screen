import {
  BottomCardWrapper,
  CardPhoto,
  CardTitle,
  ContainerGrid,
  ContainerTables,
  GridCard,
  Image,
  Section,
  Title,
  Wrapper,
} from "./styled";
import italian from "../assets/italian.jpg";
import { useArrayContext } from "../utils/ArrayProvider";

const foodOptions = [
  {
    id: 1,
    name: "Pizzaria",
    photo: italian,
  },
  {
    id: 2,
    name: "Hamburgueria",
    photo: italian,
  },
  {
    id: 3,
    name: "Pastel com caldo de cana",
    photo: italian,
  },
  {
    id: 4,
    name: "Comida Japonesa",
    photo: italian,
  },
  {
    id: 5,
    name: "Crepe",
    photo: italian,
  },
  {
    id: 6,
    name: "Comida caseira",
    photo: italian,
  },
];

export const FoodSection = () => {
  const { setFood, food } = useArrayContext();

  const selectOption = (food: string) => {
    setFood(food);
    window.location.href = "#date";
  }

  return (
    <Section id="food">
        <Title>Qual o tipo de restaurante ?</Title>
      <Wrapper>
        <ContainerTables>
          <ContainerGrid>

            {foodOptions.map((foods) => (
              <GridCard key={foods.id} onClick={() => selectOption(foods.name)} active={foods.name === food}>
                <CardPhoto>
                  <Image src={foods.photo} alt={foods.name} />
                </CardPhoto>
                <BottomCardWrapper>
                  <CardTitle>{foods.name}</CardTitle>
                </BottomCardWrapper>
              </GridCard>
            ))}
            
          </ContainerGrid>
        </ContainerTables>
      </Wrapper>
    </Section>
  );
};
