import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const ListaDeAtividades = ({ navigation }: any) => {
  // Dados fictícios para os botões (substitua com seus dados reais)
  const dadosBotoes = [
    { id: 1, token: 'ABC123', quantidadeExercicios: 10 },
    { id: 2, token: 'XYZ789', quantidadeExercicios: 15 },
    // Adicione mais dados conforme necessário
  ];

  const handlePressBotao = (token: any) => {
    // Lógica para lidar com o pressionar do botão, por exemplo, navegar para outra tela com base no token
    console.log(`Botão pressionado com o token: ${token}`);
  };

  return (
    <View style={styles.container}>
      {dadosBotoes.map((botao) => (
        // <Button
        //   key={botao.id}
        //   title={`Token: ${botao.token}\nQuantidade de Exercícios: ${botao.quantidadeExercicios}`}
        //   onPress={() => handlePressBotao(botao.token)}
        //   style={styles.botao}
        // />
        <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => {
          // Evento de abrir modal com as informações
        }}
      >
        <Text style={styles.textStyleClose}>{`Token: ${botao.token}\nQuantidade de Exercícios: ${botao.quantidadeExercicios}`}</Text>
      </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
