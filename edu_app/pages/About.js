// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';

import background from '../assets/about.jpg';
import InteractiveLearningIcon from '../assets/home/edu1.png';
import VideoAnalyticsIcon from '../assets/home/edu1.png';
import SubjectCompletionIcon from '../assets/home/edu1.png';
import InteractiveQuizzesIcon from '../assets/home/edu1.png';
import UniversityIcon from '../assets/home/edu1.png';

const AboutScreen = () => {
  const openPortfolio = (portfolioUrl) => {
    Linking.openURL(portfolioUrl);
  };

  const renderDeveloper = (name, portfolioUrl) => (
    <TouchableOpacity key={name} onPress={() => openPortfolio(portfolioUrl)}>
      <Text style={styles.developerName}>{name}</Text>
    </TouchableOpacity>
  );

  const renderSection = (icon, title, content) => (
    <View style={styles.section} key={title}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );

  const renderUniversitySection = (icon, title, content) => (
    <View style={styles.universitySection} key={title}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.universityContent}>{content}</Text>
    </View>
  );

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>About Our Learning App</Text>

            {renderSection(InteractiveLearningIcon, 'Interactive Learning', 'Our app provides an interactive learning experience. Access video lectures, organized by topics, making it easier for students to navigate through their subjects.')}

            {renderSection(VideoAnalyticsIcon, 'Video Analytics', 'Track your progress with video analytics. See how many views a video has, and monitor your own progress to keep yourself on track.')}

            {renderSection(SubjectCompletionIcon, 'Subject Completion', 'Stay organized with our completion tracking feature. Mark topics as completed to monitor your overall progress and ensure nothing is missed.')}

            {renderSection(InteractiveQuizzesIcon, 'Interactive Quizzes', 'Reinforce your learning with interactive quizzes. Test your knowledge and stay sharp with regular assessments.')}

            <Text style={styles.title}>About Karpagam Academy of Higher Education (KAHE)</Text>

            {renderUniversitySection(UniversityIcon, 'About us', 'Karpagam Academy of Higher Education (KAHE) is approved by the Ministry of Human Resource Development, Government of India. Dr. R. Vasanthakumar, the president of Karpagam Charity Trust (KCT), has been instrumental in its development. The institution focuses on contemporary infrastructure, modern teaching methodologies, career-oriented training, excellent placements, and a dedicated faculty.')}

            {renderUniversitySection(UniversityIcon, 'Recognition', 'Deemed to be University – Under Section 3 of UGC Act, 1956.\nApproved by the Ministry of Human Resource Development, Government of India.\nApproved by UGC-AICTE, New Delhi\nApproved by Council of Architecture, New Delhi\nApproved by Pharmacy Council of India (PCI), New Delhi\nAccredited with A+ Grade by NAAC in the Second cycle\nMoMSME, Govt. of India Approved Host Institution/ Business Incubator')}

            {renderUniversitySection(UniversityIcon, 'VISION', 'To impart value-based quality education, to undertake scientific, socially relevant research and instill creativity among the learners, to enable, enlighten and enrich them to serve and lead society.')}

            {renderUniversitySection(UniversityIcon, 'MISSION', 'Educating the learners to acquire the latest knowledge and skills in their respective domain through e-platforms.\nUndertaking research in socially relevant, scientific and technology-oriented projects.\nEmpowering women, rural and marginalized sections of society.\nImbibing the culture of creativity and innovation among learners.\nMaking the learners be self-reliant and molding them as responsible citizens.')}

            <View style={styles.developersSection}>
              <Text style={styles.developersTitle}>Developed by</Text>
              <View style={styles.developerNamesContainer}>
                {renderDeveloper('Mr. Lokesh', 'https://lokeshdev.co/')}
                {renderDeveloper('Mr. Mukilan', 'https://mukilan.co/')}
                {renderDeveloper('Mr. Natesan', 'https://natesanportfolio.netlify.app/')}
              </View>
              <Text style={styles.footerText}>Department of CSE, Metaverse Association</Text>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
  },
  universitySection: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
  },
  icon: {
    width: 50, // Adjust the width and height based on your image dimensions
    height: 50,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  universityContent: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  developersSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  developersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  developerNamesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  developerName: {
    fontSize: 16,
    color: '#4285F4',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default AboutScreen;
