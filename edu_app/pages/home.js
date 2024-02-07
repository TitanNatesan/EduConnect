// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import background from '../assets/home/boy.jpg';
import logo1 from '../assets/home/edu1.png';
import logo2 from '../assets/home/edu2.png';
import logo3 from '../assets/home/edu3.png';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.overlay} />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image source={logo1} style={styles.logo} />
          </View>
          <View style={styles.logoWrapper}>
            <Image source={logo2} style={styles.logo} />
          </View>
          <View style={styles.logoWrapper}>
            <Image source={logo3} style={styles.logo} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.quote}>
            "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
              <FontAwesomeIcon icon={faAngleRight} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
              <Text style={styles.buttonText}>About</Text>
              <FontAwesomeIcon icon={faAngleRight} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoWrapper: {
    marginHorizontal: 10,
    backgroundColor: '#1B1212',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  quote: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default HomeScreen;
