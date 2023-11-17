// TODO::Criar modal
import Users from "./Users";

class Login {
  // Propriedade privada
  public userLogin: Users;

  // Construtor
  constructor() {
    this.userLogin = new Users();
  }

  // Método assíncrono
  public async login(user: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          resolve(await this.userLogin.set(user));
        } catch (error) {
          reject(new Error(`login - Erro na operação! ${error}`));
        }
      }, 1000);
    });
  }

  public async logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {

        try {
          this.userLogin.delete();
          resolve();
        } catch (error) {
          reject(new Error(`logout - Erro na operação! ${error}`));
        }
         
      }, 1000);
    });
  }
}
export default Login;
