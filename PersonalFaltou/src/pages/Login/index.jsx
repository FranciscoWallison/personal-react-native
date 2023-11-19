// screens/Login.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "./../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { styles } from "./styles";
import LoginUser from "../../entities/Login";
import Users from "../../entities/Users";
const Login = ({ navigation }) => {
  const userLogin = new LoginUser();
  const users = new Users();

  const [email, setEmail] = useState("franciscowallison@gmail.com");
  const [password, setPassword] = useState("123456");

  const [textoLogin, setTextoLogin] = useState("");

  const handleLogin = async () => {
    // Lógica de autenticação aqui
    console.log(`Login: ${email} / Senha: ${password}`);

    const firebase = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Signed in - error: ", error, errorMessage, errorCode);
        setTextoLogin("Login invalido.");
      });

    if (await userLogin.login(firebase)) {
      navigation.navigate("Home");
    }
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
