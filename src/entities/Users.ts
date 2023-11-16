// TODO::Criar modal
import AsyncStorage from "@react-native-async-storage/async-storage";
const USER_TOKEN = "userToken";

export class Users {
  set = async (user: any) => {
    await AsyncStorage.setItem(USER_TOKEN, user);
  };

  get = async () => {
    const tokenUaser = await AsyncStorage.getItem(USER_TOKEN);
    return tokenUaser;
  };

  delete = async () => {
    await AsyncStorage.removeItem(USER_TOKEN);
  };
}
