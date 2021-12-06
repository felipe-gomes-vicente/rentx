import React from "react";

import { BackButton } from "../../BackButton";
import { ImageSlider } from "../../components/imageSlider";

import { Container, Header, CarImages } from "./styles"

export function CarDetails(){
  return(
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>        
      </Header>

      <CarImages>
        <ImageSlider imageUrl={['https://pngimg.com/uploads/audi/audi_PNG99491.png']} />
      </CarImages>
    </Container>
  )
}