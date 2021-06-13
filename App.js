import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import CourseScreen from './screens/CourseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: null,
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
          component={CourseScreen}
          options={({ navigation }) => ({
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 10,
                    marginLeft: 20,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignContent: 'center',
                  }}>
                  <AntDesign name='arrowleft' size={24} color='white' />
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('clicked')}>
                <View
                  style={{
                    height: 35,
                    width: 25,
                    borderRadius: 5,
                    marginRight: 15,
                    marginBottom: 10,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignContent: 'center',
                  }}>
                  <Feather name='more-vertical' size={24} color='white' />
                </View>
              </TouchableOpacity>
            ),
          })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
