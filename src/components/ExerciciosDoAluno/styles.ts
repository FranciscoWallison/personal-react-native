import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "black",
    height: 400
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 2,
    // marginBottom: 8,
    // backgroundColor: "black",
  },
  areaPessoa: {
    backgroundColor: "black",
    height: 400,
    marginBottom: 15,
    padding: 5,
  },
  textoPessoa: {
    color: "#FFF",
    fontSize: 20,
  },
});
