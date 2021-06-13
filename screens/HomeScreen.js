import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import courses from '../constants/courses';

let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
  const CourseCard = ({ course }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CourseScreen', { course: course });
          console.log('screen');
        }}>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 15,
            width: windowWidth / 2 - 30,
            height: windowHeight / 4,
            backgroundColor: 'whitesmoke',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <Image
            source={course.image}
            style={{
              width: '100%',
              height: '80%',
              borderRadius: 15,
            }}
          />
          <Text
            style={{
              marginTop: 7,
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {course.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Hey Asim</Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 16,
            color: '#61688B',
            marginTop: 5,
          }}>
          Find a course that u want to learn.
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            height: 50,
            backgroundColor: '#F5F5F7',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 20,
            borderRadius: 30,
            marginTop: 20,
            width: '85%',
          }}>
          <TextInput
            placeholder='Search Course Here'
            style={{ paddingLeft: 10 }}
          />
        </View>
        <View style={{ marginTop: 23, marginLeft: 10 }}>
          <TouchableOpacity onPress={() => console.log('search')}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: '#616788',
                marginRight: 20,
                alignContent: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name='search1' size={24} color='white' />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6E8AFA' }}>
          View All
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
