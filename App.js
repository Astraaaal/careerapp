import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentLogin from './views/Student/StudentStack';
import EmployerStack from './views/Employer/EmployerStack';
import { JobProvider } from './JobContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <JobProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChooseUser">
          <Stack.Screen
            name="ChooseUser"
            component={ChooseUserScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="StudentStack"
            component={StudentLogin}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1E90FF' },
              headerTintColor: '#fff',
              headerShown: true,
              headerLeft: null
            }}
          />

          <Stack.Screen
            name="EmployerStack"
            component={EmployerStack}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#1E90FF' },
              headerTintColor: '#fff',
              headerShown: true,
              headerLeft: null
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
}

const ChooseUserScreen = ({ navigation }) => {
  return (
    <JobProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Choose User</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StudentStack')}>
          <Image source={require('./assets/sicon.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>

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
