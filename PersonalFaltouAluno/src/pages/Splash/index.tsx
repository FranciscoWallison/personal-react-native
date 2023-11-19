// screens/Splash.tsx
import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Splash = ({ navigation }: any) => {

  useEffect(() => {
    checkUserToken(); // Verifique o token ao entrar na tela
  }, []);

  const checkUserToken = async () => {
    try {
      setTimeout(async () => {
        navigation.replace("Home");
      }, 2000); // Adicione um atraso de 2 segundos para simular a exibição da tela de splash
    } catch (error) {
      console.error("Splash - Erro ao verificar o token:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Splash Screen</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Splash;
