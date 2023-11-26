// navigation/BottomTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs/src";
import Icon  from "react-native-vector-icons/MaterialIcons";

import ListaDeAtividades from "../../../components/ListaDeAtividades";
import AdicionarExercicios from "../../../components/AdicionarExercicios";
import FourDigits from "../../../components/FourDigits";
import BotaoDeslogar from "./BotaoDeslogar";

const Tab = createBottomTabNavigator();

console.log("TELA - BottomTabNavigator")
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Aluno"
        component={FourDigits}
        options={{
          tabBarLabel: "Aluno",
          tabBarIcon: ({ color, size }) => (
            <Icon name="create" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista de Atividades"
        component={ListaDeAtividades}
        options={{
          tabBarLabel: "Lista de Atividades",
          tabBarIcon: ({ color, size }) => (
            <Icon name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Adicionar Exercícios"
        component={AdicionarExercicios}
        options={{
          tabBarLabel: "Adicionar Exercícios",
          tabBarIcon: ({ color, size }) => (
            <Icon name="playlist-add" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Deslogar"
        component={BotaoDeslogar}
        options={{
          tabBarLabel: "Sair",
          tabBarIcon: ({ color, size }) => (
            <Icon name="logout" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
