import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const DashboardScreen = () => {
  const videos = [
    'https://www.youtube.com/embed/9cbF9A6eQNA?si=MoShqThOf6Fs7Tu9',
    'https://www.youtube.com/embed/WQrK8qiB_v4?si=7LgxmfJVqp_f3RmK',
    'https://www.youtube.com/embed/75HYeIh6BWQ?si=1hPwxeId-4C1ujP0',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/home/edu1.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to the Dashboard</Text>
      <View style={styles.videoList}>
        {videos.map((video, index) => (
          <WebView
            key={index}
            style={styles.videoListItem}
            source={{ uri: video }}
            allowsFullscreenVideo={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            mediaPlaybackRequiresUserAction={Platform.OS === 'ios'}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1B1212',
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4285F4',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 15,
    marginBottom: 20,
  },
  videoList: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoListItem: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default DashboardScreen;
