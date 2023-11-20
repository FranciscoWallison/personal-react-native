// screens/ModalExercicios.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Pressable,
} from "react-native";

import ExerciciosDoAluno from "../ExerciciosDoAluno";

console.log("TELA - ModalExercicios")
const ModalExercicios = ({
  modalVisible,
  setModalVisible,
  exercicios,
  onExerciciosDelete,
  confimarExercicios,
  validConfimarExercicios,
  validonExerciciosDelete,
  textoTitle,
  textoVoltar
}: any) => {
  return (
    <View style={{}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{textoTitle}</Text>
            <FlatList
              data={exercicios}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }) => (
                <ExerciciosDoAluno
                  exercicios={item}
                  onExerciciosDelete={onExerciciosDelete}
                  validonExerciciosDelete={validonExerciciosDelete}
                />
              )}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyleClose}>{textoVoltar}</Text>
            </Pressable>
            {validConfimarExercicios ? (
              <Pressable
                style={[styles.button, styles.buttonConfirmar]}
                onPress={confimarExercicios}
              >
                <Text style={styles.textStyleConfirmar}>Confirmar</Text>
              </Pressable>
            ) : (
              <></>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ModalExercicios;
