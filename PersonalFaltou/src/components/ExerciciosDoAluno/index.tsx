import VisualizacaoVideos from "../VisualizacaoVideos";

import { View, Text, TouchableOpacity, Button } from "react-native";

import { styles } from "./styles";
const ExerciciosDoAluno = ({
  exercicios,
  onExerciciosDelete,
  validonExerciciosDelete,
}: any) => {
  // console.log("ExerciciosDoAluno: ", exercicios);

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
          {validonExerciciosDelete ? (
            <Button
              title="Deletar"
              onPress={() => onExerciciosDelete(exercicios.id)}
            />
          ) : (
            <></>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ExerciciosDoAluno;
