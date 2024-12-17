import React, { useState } from 'react';
import { Alert, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const Profile = () => {
  const [resume, setResume] = useState(null);

 /* const handleResumeClick = async () => {
    if (resume) {
      Alert.alert('Resume', `Viewing Resume: ${resume.name}`);
    } else {
      Alert.alert('No Resume', 'Please upload a resume.');
    }
  };

  const handleAddResume = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.docx],
      });

      setResume(result[0]);

      const destPath = `${RNFS.DocumentDirectoryPath}/${result[0].name}`;
      await RNFS.copyFile(result[0].uri, destPath);
      Alert.alert('Resume Uploaded', `Resume saved to ${destPath}`);

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled', 'No document selected');
      } else {
        Alert.alert('Error', 'An error occurred while selecting a document');
      }
    }
  };*/

  return (
    <View style={styles.container}>
      <Icon name="person" size={100} color="#1E90FF" style={styles.profileIcon} />

      <Text style={styles.name}>John Doe</Text>

      <Text style={styles.skills}>Skills: React, Node.js, Python</Text>

      <Text style={styles.description}>
        A passionate developer with experience in building scalable web applications.
      </Text>

      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
          <Icon name="phone" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.contactText}>09162897978</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="email" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.contactText}>gelogonzales321@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="location-on" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.contactText}>Tayabas City</Text>
        </View>
      </View>

      {resume ? (
        <TouchableOpacity style={styles.resumeButton} onPress={handleResumeClick}>
          <Text style={styles.resumeText}>View Resume</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.resumeButton} onPress={handleAddResume}>
          <Text style={styles.resumeText}>Add Resume</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileIcon: {
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  skills: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactContainer: {
    width: '100%',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  resumeButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  resumeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
