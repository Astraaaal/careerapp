import React, { useState } from 'react';
import { Alert, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobSearch from './JobSearch';
import Profile from './Profile';
import News from './News';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const StudentStack = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => setIsLoggingOut(false),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            setIsLoggingOut(true);
            navigation.reset({
              index: 0,
              routes: [{ name: 'ChoosePath' }],
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0066cc',
        inactiveTintColor: '#888',
        style: styles.tabBar,
        labelStyle: styles.label,
      }}
    >
      <Tab.Screen
        name="JobSearch"
        component={JobSearch}
        options={{
          tabBarIcon: () => <Icon name="search" size={24} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="person" size={24} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: () => <Icon name="newspaper" size={24} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Logout"
        component={() => <View />}
        options={{
          tabBarIcon: () => <Icon name="logout" size={24} />,
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={handleLogout}
              style={styles.logoutButton}
            >
              <Icon name="logout" size={24} style={styles.logoutIcon} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 60,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
  logoutButton: {
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  logoutIcon: {
    color: '#ff4d4d',
  },
});

export default StudentStack;
