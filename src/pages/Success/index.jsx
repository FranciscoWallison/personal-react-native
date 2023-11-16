import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import * as Clipboard from 'expo-clipboard';
const Success = ({ navigation }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Gerar um token de 4 dígitos aleatórios
    const novoToken = Math.floor(1000 + Math.random() * 9000).toString();
    setToken(novoToken);
  }, []);

  const navigateToSuccessScreen = () => {
    navigation.navigate('Splash');
  };

  const copiarTextoParaClipboard = async () => {
    await Clipboard.setStringAsync(token);
    alert('Token copiado para a área de transferência!');
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
