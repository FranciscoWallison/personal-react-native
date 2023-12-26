// screens/FourDigits.tsx
import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';
import ExerciciosPersonal from "../../entities/ExerciciosPersonal";
import ModalExercicios from "../ModalExercicios";
import LoadingOverlay from "../LoadingOverlay";

interface IExercicio {
  id: number;
  nome: string;
  descricao: string;
  videoURL: string;
  videoID: string;

}console.log("TELA - FourDigits")
const FourDigits = ({ navigation }: any) => {
  const exerciciosPersonal = new ExerciciosPersonal();
  const [loading, setLoading] = useState(false);
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  useEffect(() => {
    // Função para verificar a área de transferência e definir os valores dos inputs
    const verificarClipboard = async () => {
      const textoClipboard = await Clipboard.getString();
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
  }, []);

  const handleInputChange = (inputNumber: any, text: any) => {
    switch (inputNumber) {
      case 1:
        setDigit1(text);
        if (text.length === 1 && inputRef2.current) {
          inputRef2.current.focus();
        }
        break;
      case 2:
        setDigit2(text);
        if (text.length === 1 && inputRef3.current) {
          inputRef3.current.focus();
        }
        break;
      case 3:
        setDigit3(text);
        if (text.length === 1 && inputRef4.current) {
          inputRef4.current.focus();
        }
        break;
      case 4:
        setDigit4(text);
        if (text.length === 1 && inputRef4.current) {
          handleEventStart(text);
        }
        break;
      default:
        break;
    }
  };

  const handleEventStart = async (text4: any) => {
    try {
      setLoading(true);

      // Lógica para iniciar o evento quando os 4 dígitos estiverem preenchidos
      const fourDigits =
        digit1 + digit2 + digit3 + (digit4 === "" ? text4 : digit4);
      if (fourDigits.length === 4) {
        // Faça algo com os 4 dígitos
        console.log("Evento iniciado:", fourDigits);
        const result = await exerciciosPersonal.consult_token(fourDigits);
        console.log("Evento iniciado 2 :", result);
        showAtividades(result);
      } else {
        console.log("Preencha todos os 4 dígitos.", fourDigits);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInput1Submit = () => {
    console.log("handleInput1Submit");
    inputRef2.current.focus();
  };

  const handleInput2Submit = () => {
    console.log("handleInput2Submit");
    inputRef3.current.focus();
  };

  const handleInput3Submit = () => {
    console.log("handleInput3Submit");
    inputRef4.current.focus();
  };

  // modal
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciciosAluno, setExerciciosAluno] = useState([]);
  const [exercicios, setExercicios] = useState<IExercicio[]>([]);
  const onExerciciosDelete = (id: any) => {
    const newExercicios = exercicios.filter((objeto) => objeto.id !== id);
    setExercicios(newExercicios);
  };

  const confimarExercicios = () => {
    navigation.navigate("Success", { exercicios });
    setModalVisible(!modalVisible);
  };

  const showAtividades = (item: any) => {
    setExercicios(item.route);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <LoadingOverlay visible={loading} />
      <Text style={styles.title}>Digite 4 Dígitos </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={digit1}
          onChangeText={(text) => handleInputChange(1, text)}
          maxLength={1}
          keyboardType="numeric"
          placeholderTextColor="#000"
          onSubmitEditing={handleInput1Submit}
        />
        <TextInput
          ref={inputRef2}
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#000"
          maxLength={1}
          value={digit2}
          onChangeText={(text) => handleInputChange(2, text)}
          onSubmitEditing={handleInput2Submit}
        />
        <TextInput
          ref={inputRef3}
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#000"
          maxLength={1}
          value={digit3}
          onChangeText={(text) => handleInputChange(3, text)}
          onSubmitEditing={handleInput3Submit}
        />
        <TextInput
          ref={inputRef4}
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#000"
          maxLength={1}
          value={digit4}
          onChangeText={(text) => handleInputChange(4, text)}
          onSubmitEditing={handleEventStart}
        />
      </View>
      <Button title="Consultar" onPress={handleEventStart} />

      <ModalExercicios
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        exercicios={exercicios}
        onExerciciosDelete={onExerciciosDelete}
        validonExerciciosDelete={false}
        confimarExercicios={confimarExercicios}
        validConfimarExercicios={false}
        textoTitle={"Lista de Atividades"}
        textoVoltar={"Voltar"}
      />
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
    color: "black"
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
    borderRadius: 2,
    color: "black"
  },
});

export default FourDigits;
