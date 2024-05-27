import {useState, useRef, useCallback} from 'react';
import {View, Button} from 'react-native';
import {styles} from './styles';
// import { Video, ResizeMode } from "expo-av";
import Video from 'react-native-video';

console.log('TELA - VisualizacaoVideos');
const VisualizacaoVideos = ({idVideo}: any) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isPaused, setIsPaused] = useState(true);

  const validarVideo = () => {
    console.log('idVideo: ', idVideo);
    if (idVideo === '') {
      return '12lUydX5jjsz55gpvz-BfBt2WYDrtsnMw';
    }
    return idVideo;
  };

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <Video
          //  ref={video}
          style={styles.video}
          source={{
            uri: `https://drive.google.com/uc?export=download&id=${validarVideo()}`,
          }}
          paused={isPaused}
          onLoad={() => setIsPaused(!isPaused)}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
      </View>
    </View>
  );
};
export default VisualizacaoVideos;
