import React from "react";
import { View, Button } from "react-native";
import LoginUser from "../../../entities/Login";

const BotaoDeslogar = ({ navigation }: any) => {
  const userLogin = new LoginUser();
  const handleDeslogar = async () => {
    userLogin.logout();
    navigation.navigate("Splash");
  };

  return (
    <View>
      <Button title="Deslogar" onPress={handleDeslogar} color="#841584" />
    </View>
  );
};

export default BotaoDeslogar;
