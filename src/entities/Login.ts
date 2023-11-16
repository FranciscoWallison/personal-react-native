// TODO::Criar modal
import { Users } from "./Users";
const userLogin = new Users();

export class Login {
  login = async (user: any) => {
    try {
      if (!user) {
        userLogin.set(user);
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };

  /*
   TODO::Adicionar a logica de remover tudo que tiver em memoria
   do usuario logado
  */
  logout = async (user: any) => {
    try {
      userLogin.delete();
      return true;
    } catch (error) {
      throw new Error(`Login.logout ERRO: ${error}`);      
    }
  };
}
