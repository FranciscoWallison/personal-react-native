// navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs/src';
import { MaterialIcons } from '@expo/vector-icons';

// TODO:: USAR TOKEN DE ATIVIDADES
import CadastroAluno from "../../components/CadastroAluno";
import AdicionarExercicios from "../../components/AdicionarExercicios";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => { 
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cadastrar Aluno"
        component={CadastroAluno}
        options={{
          tabBarLabel: 'Cadastrar Aluno',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="create" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Adicionar Exercícios"
        component={AdicionarExercicios}
        options={{
          tabBarLabel: 'Adicionar Exercícios',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="view-list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
