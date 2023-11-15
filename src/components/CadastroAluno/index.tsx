// CadastroAluno.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";

// const planosDeTreino = require('../../db/alunos.json');

const CadastroAluno = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const handleCadastro = () => {
    // Lógica para enviar dados para o servidor ou armazenar localmente
    // Após o cadastro, navegue para a próxima tela
    // console.log("planosDeTreino: ", planosDeTreino)
    navigation.navigate("AdicaoExercicios", { nome, idade, planoDeTreino: [] });
  };

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Nome do Aluno"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade do Aluno"
          value={idade}
          onChangeText={(text) => setIdade(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Altura do Aluno"
          value={altura}
          onChangeText={(text) => setAltura(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Peso do Aluno"
          value={peso}
          onChangeText={(text) => setPeso(text)}
          keyboardType="numeric"
        />
        <Button title="Cadastrar" onPress={handleCadastro} />
      </SafeAreaView>
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
});

export default CadastroAluno;
