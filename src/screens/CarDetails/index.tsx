import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/imageSlider";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={["https://pngimg.com/uploads/audi/audi_PNG99491.png"]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>

        <About>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nostrum autem rem quidem, provident voluptas iusto eveniet nam vel,
          excepturi similique ipsam. Nesciunt et eaque dolorum soluta assumenda,
          cumque repellendus!
        </About>
      </Content>
    </Container>
  );
}
