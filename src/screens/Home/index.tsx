import React from "react";
import { StatusBar } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: "Audi",
    name: "R$ 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 220,
    },
    thumbnail: "https://pngimg.com/uploads/audi/audi_PNG99491.png",
  };
  function handleCarDetails() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'CarDetails',
      })
    );
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
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData}  onPress={handleCarDetails}/>}
      />
    </Container>
  );
}
