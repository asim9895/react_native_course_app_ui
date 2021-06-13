import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const CourseScreen = ({ route }) => {
  const { course } = route.params;

  const BottomNavigationBar = () => {
    return (
      <View
        style={{
          height: 70,
          bottom: 0,
          zIndex: 100,
          paddingHorizontal: 20,
          backgroundColor: '#fff',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 10,
            backgroundColor: '#FFEDEE',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 10,
          }}>
          <MaterialIcons name='add-shopping-cart' size={24} color='#FF6670' />
        </View>
        <View
          style={{
            marginTop: 10,
            height: 50,
            backgroundColor: '#6E8AFA',
            flex: 1,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: 'whitesmoke',
                fontWeight: 'bold',
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const CourseContentList = ({ item, index }) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <Text style={{ fontSize: 45, fontWeight: 'bold', color: '#E4E7F4' }}>
          {index + 1}
        </Text>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              color: '#A0A5BD',
              marginTop: 10,
              fontWeight: '500',
            }}>
            {item.time}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#49CC96',
            borderRadius: 20,
            marginTop: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo
            name='controller-play'
            size={24}
            color='black'
            style={{ marginLeft: 3 }}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ color: '#fff', flex: 1 }}>
      <ImageBackground
        source={course.image}
        style={{
          height: 400,
          paddingTop: 40,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <View
          style={{
            backgroundColor: 'orange',
            padding: 5,
            marginTop: 50,
            width: 90,
            paddingLeft: 10,
            borderRadius: 20,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            Best Seller
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -30,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginHorizontal: 15,
            marginVertical: 15,
          }}>
          Course Content
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={course.courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CourseContentList item={item} index={index} />
          )}
        />
      </View>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({});
