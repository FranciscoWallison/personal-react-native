// screens/Login.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "./../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { styles } from "./styles";
import { Login as LoginEntie } from "../../entities/Login";
const userLogin = new LoginEntie();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [textoLogin, setTextoLogin] = useState("");

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log(`Login: ${email} / Senha: ${password}`);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log("Signed in - user : ", user);
        if (userLogin.login(user)) {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Signed in - error: ", error, errorMessage, errorCode);
        setTextoLogin("Login invalido.");
      });
  };

  const handleCreateAccount = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <View style={styles.create_account}>
        <Button title="Ir para Cadastro" onPress={handleCreateAccount} />
      </View>

      {textoLogin != "" ? <Text style={styles.error}> {textoLogin} </Text> : ""}
    </View>
  );
};

export default Login;
