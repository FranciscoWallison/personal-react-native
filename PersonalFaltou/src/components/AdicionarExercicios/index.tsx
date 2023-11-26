import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import { styles } from "./style";
import ModalExercicios from "../ModalExercicios";
import LoadingOverlay from "../LoadingOverlay"; // Substitua pelo caminho correto do seu componente de carregamento

interface IExercicio {
  id: number;
  nome: string;
  descricao: string;
  videoURL: string;
  videoID: string;
}

console.log("TELA - AdicionarExercicios")
const AdicionarExercicios = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);

  const [exercicioNome, setExercicioNome] = useState("");
  const [exercicioDescricao, setExercicioDescricao] = useState("");
  const [videoURL, setVideoURI] = useState("");
  const [exercicios, setExercicios] = useState<IExercicio[]>([]);

  // const { planoDeTreino } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  //TODO::criar um estrutura de helps ou utilitários
  const validarUrlYutube = (url: string) => {
    if (url.includes(`https://drive.google.com/file/d/`)) {
      const urlBrawser = url.split("https://drive.google.com/file/d/")[1].split("/")[0];
      console.log(url, urlBrawser);
      return urlBrawser;
    }
  };

  const adicionarExercicio = () => {
    try {
      setLoading(true);

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
      // Operação concluída, faça o que precisar aqui
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmarEditar = () => {
    // Lógica para confirmar e realizar algum evento
    setModalVisible(true);
  };

  const onExerciciosDelete = (id: any) => {
    const newExercicios = exercicios.filter((objeto) => objeto.id !== id);
    setExercicios(newExercicios);
  };

  const confimarExercicios = () => {
    try {
      navigation.navigate("Success", { exercicios });
      setModalVisible(!modalVisible);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LoadingOverlay visible={loading} />

      <View style={styles.title_exercicios}>
        <Text style={styles.text_exercicios}>
          Exercícios Adicionados: {exercicios.length}
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome do Exercício"
        placeholderTextColor="#000"
        value={exercicioNome}
        onChangeText={(text) => setExercicioNome(text)}
      />
      <TextInput
        style={[styles.input, { height: 200, textAlignVertical: "top" }]}
        placeholder="Descrição do Exercício"
        placeholderTextColor="#000"
        value={exercicioDescricao}
        multiline={true}
        numberOfLines={10}
        onChangeText={(text) => setExercicioDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL do Vídeo Demonstrativo"
        placeholderTextColor="#000"
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
        validonExerciciosDelete={true}
        confimarExercicios={confimarExercicios}
        validConfimarExercicios={true}
        textoTitle={"Exercicios Cadastrados"}
        textoVoltar={"Voltar para Cadastro"}
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
export default AdicionarExercicios;
