// VisualizacaoVideos.js
import { useState, useRef, useCallback } from "react";
import {
  View,
  ActivityIndicator,
  useWindowDimensions,
  Alert,
} from "react-native";
// @ts-ignore 
import YoutubeIframe, { PLAYER_STATES } from "react-native-youtube-iframe";
import * as ScreenOnriention from "expo-screen-orientation"

import { styles, VIDEO_HEIGHT, VIDEO_SPACE } from "./styles";

const VisualizacaoVideos = (props: any) => {

  // console.log("VisualizacaoVideos.props: ",  props)
  const [videoReady, setVideoReady] = useState(false);
  const { width } = useWindowDimensions();
  const VIDEO_WIDTH = width - (VIDEO_SPACE * 2)

  const onStateChange = useCallback((state: string) => {
    if (state === PLAYER_STATES.ENDED) {
      Alert.alert("Mande feedback!!");
    }
  }, []);

  const onFullScreenChange = useCallback(
    (isFullScrenn: boolean) => {
      if (isFullScrenn) {
        ScreenOnriention.lockAsync(ScreenOnriention.OrientationLock.LANDSCAPE)
      }else {
        ScreenOnriention.lockAsync(ScreenOnriention.OrientationLock.PORTRAIT)
      }
    },
    [],
  )
  // https://www.youtube.com/watch?v=GKpHcN1xM3o

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe
          videoId={"GKpHcN1xM3o"}
          onReady={() => setVideoReady(true)}
          height={videoReady ? VIDEO_HEIGHT : 0 }
          width={VIDEO_WIDTH}
          onChangeState={onStateChange}
          onFullScreenChange={onFullScreenChange}
        />
        {!videoReady && <ActivityIndicator color="red" />}
        {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
      </View>
    </View>
  );
};
export default VisualizacaoVideos;
