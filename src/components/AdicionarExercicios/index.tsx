import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import VisualizacaoVideos from '../VisualizacaoVideos';

interface IExercicio {
  id: number;
  nome: string;
  descricao: string;
  videoURL: string;
}
interface IExercicios extends Array<IExercicio>{}

const AdicionarExercicios = ({ route, navigation }: any) => {
  const [exercicioNome, setExercicioNome] = useState("");
  const [exercicioDescricao, setExercicioDescricao] = useState("");
  const [videoURL, setVideoURI] = useState("");
  const [exercicios, setExercicios] = useState<IExercicio[]>([]);

  // const { planoDeTreino } = route.params;

  const adicionarExercicio = () => {

    const novoExercicio:IExercicio = {
      id: exercicios.length + 1,
      nome: exercicioNome,
      descricao: exercicioDescricao,
      videoURL: videoURL,
    };
    setExercicios([...exercicios, novoExercicio]);

    // Atualiza o plano de treino com o novo exercício
    // planoDeTreino.exercicios.push(novoExercicio);

    // Limpa os campos após adicionar o exercício
    setExercicioNome("");
    setExercicioDescricao("");
    setVideoURI("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nome do Exercício"
        value={exercicioNome}
        onChangeText={(text) => setExercicioNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Exercício"
        value={exercicioDescricao}
        onChangeText={(text) => setExercicioDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL do Vídeo Demonstrativo"
        value={videoURL}
        onChangeText={(text) => setVideoURI(text)}
      />
      <Button title="Adicionar Exercício" onPress={adicionarExercicio} />

      {/* Lista de exercícios adicionados */}
      <Text>Exercícios Adicionados:</Text>
      <FlatList
        data={exercicios}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>

            <VisualizacaoVideos/>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AdicionarExercicios;
