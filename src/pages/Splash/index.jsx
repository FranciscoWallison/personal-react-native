// screens/Splash.tsx
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Users } from "../../entities/Users";


const Splash = ({ navigation }) => {
  const userLogin = new Users();

  useEffect(() => {
    checkUserToken(); // Verifique o token ao entrar na tela
  }, []);

  const checkUserToken = async () => {
    try {
      const user = userLogin.get();
      setTimeout(() => {
        if (user) {
          // Se houver um token, o usuário está autenticado, vá para a tela inicial
          navigation.replace('Home');
        } else {
          // Se não houver token, o usuário não está autenticado, vá para a tela de login
          navigation.replace('Login');
        }
      }, 2000); // Adicione um atraso de 2 segundos para simular a exibição da tela de splash
    } catch (error) {
      console.error('Erro ao verificar o token:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash Screen</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Splash;