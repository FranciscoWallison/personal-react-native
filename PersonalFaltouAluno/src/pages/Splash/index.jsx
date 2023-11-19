// screens/Splash.tsx
import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import User from "../../entities/Users";

const Splash = ({ navigation }) => {
  const userLogin = new User();

  useEffect(() => {
    checkUserToken(); // Verifique o token ao entrar na tela
  }, []);

  const checkUserToken = async () => {
    try {
      setTimeout(async () => {
        const user = await userLogin
          .get()
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log("checkUserToken error: ", error);
            alert(error.message);
          });
        if (user) {
          // Se houver um token, o usuário está autenticado, vá para a tela inicial
          navigation.replace("Home");
        } else {
          // Se não houver token, o usuário não está autenticado, vá para a tela de login
          navigation.replace("Login");
        }
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
