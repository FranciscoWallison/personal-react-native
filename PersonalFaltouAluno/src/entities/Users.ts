// TODO::Criar modal
import AsyncStorage from "@react-native-async-storage/async-storage";
const USER_TOKEN = "usertoken";

// export default {
//   set(user: any) {
//     console.log("AQUIIII-2: ", user, USER_TOKEN);
// AsyncStorage.setItem(USER_TOKEN, user);
// this.valid();
//   },
// get() {
//   const tokenUaser = AsyncStorage.getItem(USER_TOKEN);
//   return tokenUaser;
// },
// valid() {
//   const valid = this.get();
//   console.log("valid:", valid);
// },
//   delete() {
//     AsyncStorage.removeItem(USER_TOKEN);
//   },
// };

class User {
  // Propriedade privada
  private contador: number;

  // Construtor
  constructor() {
    this.contador = 0;
  }

  // Método público
  public exemplo(user: any): void {
    this.contador++;
    this.exibirContador();
  }

  // Método privado
  private exibirContador(): void {
    console.log(`Contador: ${this.contador}`);
  }

  // Método assíncrono
  public async set(user: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          if (user === undefined) {
            resolve(false);
          }
          const stringToken = JSON.stringify(user);
          await AsyncStorage.setItem(USER_TOKEN, stringToken);
          const tokenUaser = await this.get();

          resolve(tokenUaser?.uid != null);
        } catch (error) {
          reject(new Error(`set - user - Erro na operação! ${error}`));
        }
      }, 1000);
    });
  }
  public async get(): Promise<any | null> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const tokenUaser = await AsyncStorage.getItem(USER_TOKEN);
        const stringToken = JSON.stringify(tokenUaser);
        const ojectToken = JSON.parse(stringToken);
        try {
          resolve(JSON.parse(ojectToken));
        } catch (error) {
          reject(new Error(`get - user - Erro na operação! ${error}`));
        }
      }, 1000);
    });
  }
  public async delete(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          AsyncStorage.removeItem(USER_TOKEN);
          const valid = this.get();
          resolve(valid === null);
        } catch (error) {
          reject(new Error(`delete - user - Erro na operação! ${error}`));
        }
      }, 1000);
    });
  }
}
export default User;
