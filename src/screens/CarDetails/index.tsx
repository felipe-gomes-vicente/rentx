import React from "react";
import { useNavigation,CommonActions } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/imageSlider";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

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
  Accessories,
  Footer
} from "./styles";

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Scheduling',
      })
    );
  }

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

        <Accessories>
          <Accessory  name="380Km/h" icon={speedSvg} />
          <Accessory  name="3.2s" icon={accelerationSvg} />
          <Accessory  name="800 HP" icon={forceSvg} />
          <Accessory  name="Gasolina" icon={gasolineSvg} />
          <Accessory  name="Auto" icon={exchangeSvg} />
          <Accessory  name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nostrum autem rem quidem, provident voluptas iusto eveniet nam vel,
          excepturi similique ipsam. Nesciunt et eaque dolorum soluta assumenda,
          cumque repellendus!
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
