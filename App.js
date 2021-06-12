import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { MaterialIcons } from '@expo/vector-icons';
import CourseScreen from './screens/CourseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { elevation: 0 },
        }}>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerTitle: 'First',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log('clicked')}>
                <MaterialIcons
                  name='sort'
                  size={24}
                  color='black'
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  marginRight: 15,
                }}
                source={require('./assets/1.jpg')}
              />
            ),
          }}></Stack.Screen>
        <Stack.Screen
          name='CourseScreen'
          component={CourseScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
