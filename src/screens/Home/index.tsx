import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home(){
  const carDataOne = {
    brand: 'Audi',
    name: 'R$ 5 Coupé',
    rent: {
    period: 'Ao dia',
    price: 220,
    },
    thumbnail: 'https://pngimg.com/uploads/audi/audi_PNG99491.png'
  }

  const carDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
    period: 'Ao dia',
    price: 300,
    },
    thumbnail: 'https://cdn.picpng.com/porsche/porsche-picture-29281.png'
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
          Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne} />
      <Car data={carDataTwo} />
    </Container>
  )
}