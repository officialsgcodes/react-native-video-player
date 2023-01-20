import {View, Text} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';

export default function App() {
  return (
    <View>
      <VideoPlayer
        video={require('./assets/videos/dummy_video.mp4')}
        // videoHeight={500}
        // videoWidth={200}
        thumbnail={{ uri: "https://baconmockup.com/370/210/" }}
        endThumbnail={{ uri: "https://baconmockup.com/370/210/" }}
        showDuration={true}
        autoplay
        controlsTimeout={2000}
        disableControlsAutoHide={true}
        // muted={true}
        defaultMuted={true}
        disableSeek={true}
        pauseOnPress={true}
      />
    </View>
  );
}

// https://baconmockup.com/370/210/
