import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import ModalExercicios from "../ModalExercicios";
import ExerciciosPersonal from "../../entities/ExerciciosPersonal";
import LoadingOverlay from "../LoadingOverlay"; // Substitua pelo caminho correto do seu componente de carregamento

interface IExercicio {
  id: number;
  nome: string;
  descricao: string;
  videoURL: string;
  videoID: string;
}
const ListaDeAtividades = ({ navigation }: any) => {
  const exerciciosPersonal = new ExerciciosPersonal();

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciciosAluno, setExerciciosAluno] = useState([]);
  const [exercicios, setExercicios] = useState<IExercicio[]>([]);

  useEffect(() => {
    // Função para verificar a área de transferência e definir os valores dos inputs
    const verificarClipboard = async () => {
      try {
        setLoading(true);

        const result = await exerciciosPersonal.consult_treinador();
        setExerciciosAluno(result);
      } finally {
        setLoading(false);
      }
    };
    verificarClipboard();
  }, [exercicios]);

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
      {exerciciosAluno.map((item: any, index: any) => (
        <Pressable
          key={index}
          style={[styles.button, styles.buttonClose]}
          onPress={() => showAtividades(item)}
        >
          <Text
            style={styles.textStyleClose}
          >{`Token: ${item.token}\nQuantidade de Exercícios: ${item.route.length}`}</Text>
        </Pressable>
      ))}

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
  botao: {
    marginVertical: 10,
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
  textStyleClose: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ListaDeAtividades;
