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
        {/* header */}
        <View>
          <Text style={styles.textoPessoa}>#{exercicios.id} </Text>
          <Text style={styles.textoPessoa}>Exercício: {exercicios.nome} </Text>
        </View>
        {/* body */}

        <VisualizacaoVideos idVideo={exercicios.videoID} />

        {/* footer */}

        <Text style={[styles.textoPessoa, { marginTop: 2 }]}>
          Descrição: {exercicios.descricao}{" "}
        </Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            console.log("renderItem: ", exercicios.id);
          }}
        >
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
