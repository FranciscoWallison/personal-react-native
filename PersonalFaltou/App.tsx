import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/pages/Navigation/Stack";
// export { ErrorBoundary } from 'expo-router';
import { ErrorBoundary } from "react-error-boundary";

// // Função para lidar com exceções capturadas pelo ErrorBoundary
const errorHandler = (error: any, info: any) => {
  // Aqui, você pode enviar o erro para um serviço de relatórios de erros, registrar no console, etc.
  console.error("Erro capturado:", error);
  console.error("Informações adicionais:", info);
  // Você também pode redirecionar o usuário para uma tela de erro ou fazer outras ações necessárias.
};

// // Componente Fallback para renderizar em caso de erro
const ErrorFallback = ({ error }: { error: Error }) => (
  <View>
    <Text>Algo deu errado</Text>
    <Text>{error.message}</Text>
    {/* Adicione mais informações sobre o erro conforme necessário */}
  </View>
);

console.log("TELA - AppNavigator");
const AppNavigator = () => {
  const [someKey, setSomeKey] = React.useState(true);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={errorHandler}
      onReset={() => setSomeKey(false)}
      resetKeys={["someKey"]}
    >
      {/* Seus componentes aqui... */}
      {someKey ? (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      ) : (
        <>
          <Text>Deu Erro</Text>
        </>
      )}
    </ErrorBoundary>
  );
};

export default AppNavigator;
