import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black"
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  title_exercicios: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  text_exercicios: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "black"
  },
  icon_exercicios: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonClose: {
    backgroundColor: "blue",
    width: 400,
  },
  buttonConfirmar: {
    backgroundColor: "green",
    width: 400,
  },
  buttonConfirmarEditar: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
    marginTop: 20,
  },
  buttonConfirmarEditar_zero: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "gray",
    marginTop: 20,
  },
  textStyleClose: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleConfirmar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
});
