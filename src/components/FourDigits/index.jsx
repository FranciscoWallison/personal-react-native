// screens/FourDigits.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import * as Clipboard from "expo-clipboard";

const FourDigits = () => {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");

  useEffect(() => {
    // Função para verificar a área de transferência e definir os valores dos inputs
    const verificarClipboard = async () => {
      const textoClipboard = await Clipboard.getStringAsync();
      if (textoClipboard.length === 4 && /^\d+$/.test(textoClipboard)) {
        console.log("aqui:", textoClipboard.split(""));
        const number = textoClipboard.split("");
        setDigit1(number[0]);
        setDigit2(number[1]);
        setDigit3(number[2]);
        setDigit4(number[3]);
        // setInputValues([...textoClipboard.split("")]);
        // Clipboard.setStringAsync(""); // Limpar a área de transferência após a leitura
      }
    };

    verificarClipboard();
  }, [digit1, digit2, digit3, digit4]);

  const handleInputChange = (inputNumber, text) => {
    switch (inputNumber) {
      case 1:
        setDigit1(text);
        break;
      case 2:
        setDigit2(text);
        break;
      case 3:
        setDigit3(text);
        break;
      case 4:
        setDigit4(text);
        break;
      default:
        break;
    }
  };

  const handleEventStart = () => {
    // Lógica para iniciar o evento quando os 4 dígitos estiverem preenchidos
    const fourDigits = digit1 + digit2 + digit3 + digit4;
    if (fourDigits.length === 4) {
      // Faça algo com os 4 dígitos
      console.log("Evento iniciado:", fourDigits);
    } else {
      console.log("Preencha todos os 4 dígitos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite 4 Dígitos</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={digit1}
          onChangeText={(text) => handleInputChange(1, text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={digit2}
          onChangeText={(text) => handleInputChange(2, text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={digit3}
          onChangeText={(text) => handleInputChange(3, text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={digit4}
          onChangeText={(text) => handleInputChange(4, text)}
        />
      </View>
      <Button title="Consultar" onPress={handleEventStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 16,
  },
  input: {
    width: "20%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
});

export default FourDigits;
