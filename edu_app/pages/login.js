import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

import background from '../assets/login.jpg';
import logo1 from '../assets/home/edu1.png'; // Replace with your logo1 image
import logo2 from '../assets/home/edu3.png'; // Replace with your logo2 image

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = [
      { username: '22becse049', password: 'Educonnect'},
      { username: '22becse057', password: 'Educonnect'},
      { username: '22becse059', password: 'Educonnect'},
    ];
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      navigation.navigate('FOE');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.header}>
        <Image source={logo1} style={styles.logo1} />
        <Image source={logo2} style={styles.logo2} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          placeholder="Student ID"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logo1: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logo2: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 250,
    color: '#FFFFFF',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 20,
    width: 250,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomText: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  signupText: {
    color: '#4285F4',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
