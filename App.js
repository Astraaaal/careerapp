import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentLogin from './views/Student/StudentStack'; // Import Student login component
import EmployerStack from './views/Employer/EmployerStack'; // Import Employer stack or login component
import { JobProvider } from './JobContext';

// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <JobProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChooseUser">
          {/* Stack screen directly with the user selection buttons */}
          <Stack.Screen
            name="ChooseUser"
            component={ChooseUserScreen}
            options={{ headerShown: false }} // Hide the header for this screen
          />

          {/* StudentStack screen */}
          <Stack.Screen
            name="StudentStack"
            component={StudentLogin}
            options={{
              title: 'Student Login',
              headerStyle: { backgroundColor: '#1E90FF' },
              headerTintColor: '#fff',
            }}
          />

          {/* EmployerStack screen */}
          <Stack.Screen
            name="EmployerStack"
            component={EmployerStack}
            options={{
              title: 'Employer Login',
              headerStyle: { backgroundColor: '#1E90FF' },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
}

// The Choose User screen with buttons to navigate to either StudentLogin or EmployerStack
const ChooseUserScreen = ({ navigation }) => {
  return (
    <JobProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Choose User</Text>

        {/* Button to navigate to StudentLogin */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StudentStack')}>
          <Image source={require('./assets/sicon.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>

        {/* Button to navigate to EmployerStack */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EmployerStack')}>
          <Image source={require('./assets/eicon.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Employer</Text>
        </TouchableOpacity>
      </View>
    </JobProvider>
  );
};

// Styles for the buttons and layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '50%',
  },
  buttonImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
