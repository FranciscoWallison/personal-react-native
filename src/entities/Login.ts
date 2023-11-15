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

  logout = async (user: any) => {
    try {
      if (!user) {
        userLogin.delete();
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };
}
