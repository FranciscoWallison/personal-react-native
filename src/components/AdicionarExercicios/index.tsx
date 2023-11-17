import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  Modal,
  FlatList,
  Pressable,
} from "react-native";
import ModalExercicios from "../ModalExercicios";

interface IExercicio {
  id: number;
  nome: string;
  descricao: string;
  videoURL: string;
  videoID: string;
}

const AdicionarExercicios = ({ navigation }: any) => {
  const [exercicioNome, setExercicioNome] = useState("");
  const [exercicioDescricao, setExercicioDescricao] = useState("");
  const [videoURL, setVideoURI] = useState("");
  const [exercicios, setExercicios] = useState<IExercicio[]>([]);

  // const { planoDeTreino } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  //TODO::criar um estrutura de helps ou utilitários
  const validarUrlYutube = (url: string) => {
    if (url.includes(`https://www.youtube.com/watch?v=`)) {
      const urlBrawser = url.split("https://www.youtube.com/watch?v=")[1];
      console.log("https://www.youtube.com/watch?v=", urlBrawser);
      return urlBrawser;
    }

    if (url.includes(`https://youtu.be/`)) {
      const urlSmartPhone = url.split(`https://youtu.be/`)[1].split("?")[0];
      console.log("https://youtu.be/", urlSmartPhone);
      return urlSmartPhone;
    }
    return "";
  };

  const adicionarExercicio = () => {
    const novoExercicio: IExercicio = {
      id: exercicios.length + 1,
      nome: exercicioNome,
      descricao: exercicioDescricao,
      videoURL: videoURL,
      videoID: validarUrlYutube(videoURL),
    };
    setExercicios([...exercicios, novoExercicio]);

    // Atualiza o plano de treino com o novo exercício
    // planoDeTreino.exercicios.push(novoExercicio);

    // Limpa os campos após adicionar o exercício
    setExercicioNome("");
    setExercicioDescricao("");
    setVideoURI("");
  };

  const handleConfirmarEditar = () => {
    const listaDeExercicios = exercicios;
    // Lógica para confirmar e realizar algum evento
    // console.log("Exercício Confirmado:", listaDeExercicios);
    setModalVisible(true);
  };

  const onExerciciosDelete = (id: any) => {
    const newExercicios = exercicios.filter((objeto) => objeto.id !== id);
    setExercicios(newExercicios);
  };

  const confimarExercicios = () => {
    navigation.navigate("Success", { exercicios });
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_exercicios}>
        <Text style={styles.text_exercicios}>
          Exercícios Adicionados: {exercicios.length}
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome do Exercício"
        value={exercicioNome}
        onChangeText={(text) => setExercicioNome(text)}
      />
      <TextInput
        style={[styles.input, { height: 200, textAlignVertical: "top" }]}
        placeholder="Descrição do Exercício"
        value={exercicioDescricao}
        multiline={true}
        numberOfLines={10}
        onChangeText={(text) => setExercicioDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL do Vídeo Demonstrativo"
        value={videoURL}
        onChangeText={(text) => setVideoURI(text)}
      />

      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: "green",
        }}
        onPress={adicionarExercicio}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: "bold",
            letterSpacing: 0.25,
            color: "white",
          }}
        >
          Adicionar Exercício
        </Text>
      </Pressable>
      {/* Lista de exercícios adicionados */}
      <ModalExercicios
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        exercicios={exercicios}
        onExerciciosDelete={onExerciciosDelete}
        confimarExercicios={confimarExercicios}
      />
      {/* FIM do modal */}

      <Pressable
        style={styles.buttonConfirmarEditar}
        onPress={handleConfirmarEditar}
        disabled={!exercicios}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: "bold",
            letterSpacing: 0.25,
            color: "white",
          }}
        >
          Confirmar ou Editar
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  title_exercicios: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  text_exercicios: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  icon_exercicios: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonClose: {
    backgroundColor: "blue",
    width: 400,
  },
  buttonConfirmar: {
    backgroundColor: "green",
    width: 400,
  },
  buttonConfirmarEditar: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
    marginTop: 20,
  },
  textStyleClose: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleConfirmar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AdicionarExercicios;
