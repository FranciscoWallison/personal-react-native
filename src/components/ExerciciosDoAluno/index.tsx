import VisualizacaoVideos from "../VisualizacaoVideos";

import { View, Text, TouchableOpacity, Button } from "react-native";

import { styles } from "./styles";
const ExerciciosDoAluno = ({ exercicios, onExerciciosDelete }: any) => {
  console.log("ExerciciosDoAluno: ", exercicios);
  const handleEditar = (id: any) => {
    // Lógica para editar o exercício com o ID fornecido
    console.log("Editar exercício com ID:", id);
  };

  const handleDeletar = (id: any) => {
    // Lógica para deletar o exercício com o ID fornecido
    console.log("Deletar exercício com ID:", id, exercicios);

  };

  return (
    <View style={styles.container}>
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>#{exercicios.id} </Text>
        <Text style={styles.textoPessoa}>Exercício: {exercicios.nome} </Text>
        <VisualizacaoVideos idVideo={exercicios.videoID} />
        <Text style={styles.textoPessoa}>
          Descrição: {exercicios.descricao}{" "}
        </Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            console.log("renderItem: ", exercicios.id);
          }}
        >
          {/* <Button title="Editar" onPress={() => handleEditar(exercicios.id)} /> */}
          <Button
            title="Deletar"
            onPress={() => onExerciciosDelete(exercicios.id)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ExerciciosDoAluno;
