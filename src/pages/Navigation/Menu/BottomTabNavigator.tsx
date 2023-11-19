// navigation/BottomTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs/src";
import { MaterialIcons } from "@expo/vector-icons";

import ListaDeAtividades from "../../../components/ListaDeAtividades";
import AdicionarExercicios from "../../../components/AdicionarExercicios";
import FourDigits from "../../../components/FourDigits";
import BotaoDeslogar from "./BotaoDeslogar"; // Um componente que representa o botão de deslogar

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Aluno"
        component={FourDigits}
        options={{
          tabBarLabel: "Aluno",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="create" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista de Atividades"
        component={ListaDeAtividades}
        options={{
          tabBarLabel: "Lista de Atividades",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Adicionar Exercícios"
        component={AdicionarExercicios}
        options={{
          tabBarLabel: "Adicionar Exercícios",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="view-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Deslogar"
        component={BotaoDeslogar}
        options={{
          tabBarLabel: "Sair",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
