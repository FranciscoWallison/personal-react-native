import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import * as Clipboard from "expo-clipboard";
import ExerciciosPersonal from "../../entities/ExerciciosPersonal";
import Users from "../../entities/Users";

const Success = ({ route, navigation }: any) => {
  const userLogin = new Users();
  const exerciciosPersonal = new ExerciciosPersonal();

  const [token, setToken] = useState("");
  const [cadastrodosExercicios, setCadastrodosExercicios] = useState({});

  useEffect(() => {
    // Gerar um token de 4 dígitos aleatórios
    const cadastroExercicios = async () => {
      try {
        setTimeout(() => {
          const novoToken = Math.floor(1000 + Math.random() * 9000).toString();
          setToken(novoToken);
        }, 2000); // Adicione um atraso de 2 segundos para simular a exibição da tela de splash
      } catch (error) {
        console.error("Success - Erro ao verificar o token:", error);
      }
    };

    cadastroExercicios();
  }, []);

  const navigateToSuccessScreen = async () => {
    const user = await userLogin.get();

    const cadastroExercicios = {
      token: token,
      route: route.params.exercicios,
      visto: false,
      uid: user.uid,
    };
    setCadastrodosExercicios(cadastroExercicios);

    const result = await exerciciosPersonal.create(cadastroExercicios);

    console.log("cadastroExercicios: ", cadastroExercicios, result);
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
