import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCogs, faBuilding, faFlask, faPrescriptionBottleAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import background from '../assets/foe.png'; // Replace with your background image
import logo from '../assets/home/edu1.png'; // Replace with your logo image

const YearScreen = ({ navigation }) => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  const handleFacultySelection = (faculty) => {
    setSelectedFaculty(faculty);
      navigation.navigate('Subject');
  };

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Explore Year</Text>
        <View style={styles.facultyContainer}>
          <TouchableOpacity
            style={[styles.facultyItem, selectedFaculty === '1st Year' && styles.selectedFaculty]}
            onPress={() => handleFacultySelection()}
          >
            <FontAwesomeIcon icon={faCogs} style={styles.facultyIcon} />
            <Text style={styles.facultyText}>1st Year</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.facultyItem, selectedFaculty === '1st Year' && styles.selectedFaculty]}
            onPress={() => handleFacultySelection()}
          >
            <FontAwesomeIcon icon={faBuilding} style={styles.facultyIcon} />
            <Text style={styles.facultyText}>2st Year</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.facultyItem, selectedFaculty === '1st Year' && styles.selectedFaculty]}
            onPress={() => handleFacultySelection()}
          >
            <FontAwesomeIcon icon={faFlask} style={styles.facultyIcon} />
            <Text style={styles.facultyText}>3st Year</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.facultyItem, selectedFaculty === '1st Year' && styles.selectedFaculty]}
            onPress={() => handleFacultySelection()}
          >
            <FontAwesomeIcon icon={faPrescriptionBottleAlt} style={styles.facultyIcon} />
            <Text style={styles.facultyText}>4st Year</Text>
          </TouchableOpacity>

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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginRight: 'auto',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logoutButton: {
    marginLeft: 'auto',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
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
  facultyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  facultyItem: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 120,
  },
  selectedFaculty: {
    backgroundColor: '#4285F4', 
  },
  facultyIcon: {
    color: '#4285F4',
    fontSize: 36,
  },
  facultyText: {
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default YearScreen;
