// screens/Signup.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "./../../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from "./styles";

console.log("TELA - Signup")
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validErro, setValidErro] = useState(false);

  const handleSignup = () => {
    setValidErro(false)
    // Lógica de criação de usuário aqui
    console.log(`Cadastro: ${email} / Senha: ${password}`);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user: ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("error: ", error, errorMessage, errorCode);
        setValidErro(true)
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#000"
        secureTextEntry
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
      {validErro ? (
        <Text style={styles.error}>
          {" "}
          A senha tem que ter pelo meno 6 caracteres.
        </Text>
      ) : (
        ""
      )}
    </View>
  );
};

export default Signup;
