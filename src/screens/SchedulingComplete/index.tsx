import React from "react";
import { useWindowDimensions, StatusBar } from "react-native";
import { useNavigation,CommonActions } from "@react-navigation/native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SchedulingComplete',
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
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precica ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
