import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroAluno from "./src/components/CadastroAluno";
// import PlanosTreino from "./src/components/PlanosTreino";
import AdicaoExercicios from "./src/components/AdicaoExercicios";


const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CadastroAluno">
          <Stack.Screen name="CadastroAluno" component={CadastroAluno} />
          {/* <Stack.Screen name="PlanosTreino" component={PlanosTreino} /> */}
          <Stack.Screen name="AdicaoExercicios" component={AdicaoExercicios} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
