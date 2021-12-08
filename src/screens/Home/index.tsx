import React, {useEffect, useState} from "react";
import { StatusBar } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [ loading, setLoading] = useState(true);
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

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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

      { 
        loading ? <Load /> :
        <CarList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <Car data={item} onPress={handleCarDetails}/>}
        />
      }
      
    </Container>
  );
}
