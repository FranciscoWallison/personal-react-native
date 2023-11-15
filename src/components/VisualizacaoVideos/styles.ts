import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 180;
export const VIDEO_SPACE = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: VIDEO_SPACE,
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
    marginTop: 48,
  },
});
