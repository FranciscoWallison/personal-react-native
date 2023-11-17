// TODO::Criar modal
import AsyncStorage from "@react-native-async-storage/async-storage";
const EXERCICIOS_PERSONAL = "exercicios";
import { app, database } from "../config/firebaseConfig";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

const dbInstance = collection(database, EXERCICIOS_PERSONAL);

class ExerciciosPersonal {
  // Propriedade privada

  // Construtor
  constructor() {}

  public async create(exercicios: any): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          addDoc(dbInstance, exercicios).then(() => {
            console.log("adicionado: ", exercicios);
          });
          resolve("Operação bem-sucedida!");
        } catch (error) {
          reject(new Error(`Erro na operação! ${error}`));
        }
      }, 1000);
    });
  }

  public async consult(token_exercicio: any): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const singleUsuario = doc(database, EXERCICIOS_PERSONAL, token_exercicio);
          const data = getDoc(singleUsuario);
          // const exercicio = { ...data?.data(), token: data?.token };
          console.log("consult: ", {});

          resolve("Operação bem-sucedida!");
        } catch (error) {
          reject(new Error(`Erro na operação! ${error}`));
        }
      }, 1000);
    });
  }
  // Método assíncrono
  public async set(exercicios: any): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        AsyncStorage.setItem(EXERCICIOS_PERSONAL, exercicios);

        if (await this.valid()) {
          resolve("Operação bem-sucedida!");
        } else {
          reject(new Error("Erro na operação!"));
        }
      }, 1000);
    });
  }
  public async get(): Promise<object> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const exercicios = AsyncStorage.getItem(EXERCICIOS_PERSONAL);
        if (await this.valid()) {
          resolve(exercicios);
        } else {
          reject(new Error("Erro na operação!"));
        }
      }, 1000);
    });
  }
  private async valid(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const valid = this.get();
        console.log("valid:", valid);
        if (!valid) {
          resolve(true);
        } else {
          reject(new Error("Erro na operação!"));
        }
      }, 1000);
    });
  }
  public async delete(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        AsyncStorage.removeItem(EXERCICIOS_PERSONAL);
        const valid = this.get();
        if (valid === null) {
          resolve(true);
        } else {
          reject(new Error("Erro na operação!"));
        }
      }, 1000);
    });
  }
}

export default ExerciciosPersonal;
