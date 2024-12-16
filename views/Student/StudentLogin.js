import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { auth, db } from '../../firebase'; // Import Firebase auth and Firestore
import { createUserWithEmailAndPassword } from '../../node_modules/firebase/auth'; // Firebase Auth
import { collection, addDoc } from '../../node_modules/firebase/firestore'; // Firestore functions

const StudentSignup = ({ navigation }) => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Create an email from the student ID for Firebase Auth
    const email = `${studentID}@mseuf.edu.ph`;

    try {
      // Register the student using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // After successful signup, store student credentials in Firestore
      await addDoc(collection(db, 'students'), {
        studentID,
        email: user.email,
        uid: user.uid // Store user ID from Firebase Authentication
      });

      // Navigate to the StudentHome screen after successful registration
      navigation.navigate('StudentHome');
    } catch (error) {
      console.error(error);
      Alert.alert('Registration failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Student ID</Text>
      <TextInput
        style={styles.input}
        value={studentID}
        onChangeText={setStudentID}
        placeholder="Enter Student ID"
        autoCapitalize="characters"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  label: { fontSize: 18, marginBottom: 8 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default StudentSignup;
