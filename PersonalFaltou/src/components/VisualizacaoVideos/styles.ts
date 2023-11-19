import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 300;
export const VIDEO_SPACE = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: VIDEO_SPACE,
    // borderWidth: 1,
    // borderColor: 'gray',
    // borderRadius: 8,
    // margin: 20,
    // backgroundColor: "green",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  player: {
    width: "100%",
    height: VIDEO_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
