import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import * as Clipboard from "expo-clipboard";
import ExerciciosPersonal  from "../../entities/ExerciciosPersonal";


import { Users } from "../../entities/Users";

const Success = ({ route, navigation }) => {

  const exerciciosPersonal = new ExerciciosPersonal();
  const userLogin = new Users();
  const [token, setToken] = useState("");

  useEffect(() => {
    // Gerar um token de 4 dígitos aleatórios
    const cadastroExercicios = async () => {
      try {
        const user = await userLogin.get();
        setTimeout(() => {
          if (user) {
            const novoToken = Math.floor(
              1000 + Math.random() * 9000
            ).toString();
            setToken(novoToken);
            const cadastroExercicios = {
              token: token,
              route: route.params.exercicios,
            };
            console.log("route:", cadastroExercicios, user);
          } else {
            // Se não houver token, o usuário não está autenticado, vá para a tela de login
            navigation.replace("Login");
          }
        }, 2000); // Adicione um atraso de 2 segundos para simular a exibição da tela de splash
      } catch (error) {
        console.error("Success - Erro ao verificar o token:", error);
      }
    };

    cadastroExercicios();
  }, []);

  const navigateToSuccessScreen = () => {
    navigation.navigate("Splash");
  };

  const copiarTextoParaClipboard = async () => {
    // console.log("route:", route)
    await Clipboard.setStringAsync(token);
    alert("Token copiado para a área de transferência!");
  };

  return (
    <View style={styles.container}>
      <Text>Exercício criado com sucesso</Text>
      <Text style={styles.token}>{token}</Text>

      <Button title="Copiar Token" onPress={copiarTextoParaClipboard} />

      <Pressable
        style={[styles.button, styles.buttonConfirmar]}
        onPress={() => navigateToSuccessScreen()}
      >
        <Text style={styles.textStyleConfirmar}>Confirmar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  token: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonConfirmar: {
    backgroundColor: "green",
    width: 400,
  },
  textStyleConfirmar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Success;
