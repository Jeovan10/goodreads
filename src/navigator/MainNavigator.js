import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import MostViewedScreen from '../screens/MostViewedScreen';
import RecommendedScreen from '../screens/RecommendedScreen';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator Component - REMOVE NavigationContainer from here
const TabNavigator = () => (
  <Tab.Navigator 
  initialRouteName="Home"
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#d3d3d3', // Set the color of the navigation bar
    },
  
    headerTitleStyle: {
      color: 'black',
      fontSize: 20,
      fontStyle: 'italic',
    },
  }}
  

    >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'goodreads',
        tabBarLabel: 'Home',
        headerStyle: { backgroundColor: '#bca89f', height: 60 },
        headerTitleStyle: {
          color: 'black',
          fontSize: 33,
          fontStyle: 'italic',
          
        },
        headerLeft: () => (
          <View>
            <Image
              style={{ width: 50, height: 50, marginLeft: 10 }}
              source={require('../../assets/images/goodreads.png')}
            />
          </View>
        ),
        tabBarIcon: ({ focused }) => (
          <Icon
            name='home'
            type='Entypo'
            size={24}
          />
        ),
        
      }}
    />
    <Tab.Screen
      name="Recommended"
      component={RecommendedScreen}
      
      options={{
        title: 'My Books',
        tabBarLabel: 'My Books',
        headerStyle: { backgroundColor: '#bca89f' },
        headerTitleStyle: { color: 'white', fontSize: 24 },
        tabBarIcon: ({ focused }) => (
          <Icon
            name='book'
            type='Entypo'
            size={24}
          />
        ),
        headerTitleStyle: {
          color: 'black',
          fontSize: 25,
          fontStyle: 'bold',
          
        },
        
      }}
    />
    <Tab.Screen
      name="MostViewed"
      component={MostViewedScreen}
      options={{
        title: 'Communities',
        
        tabBarLabel: 'Communities',
        headerStyle: { backgroundColor: '#bca89f' },
        headerTitleStyle: { color: 'white', fontSize: 24 },
        
        tabBarIcon: ({ focused }) => (
          <Icon
            name='people'
            type='Ionicons'
            size={24}
          />
        ),
        headerTitleStyle: {
          color: 'black',
          fontSize: 25,
          fontStyle: 'bold',
          
        },
      }}
    />
  </Tab.Navigator>
);

// Main Stack Navigator - Keep NavigationContainer Here
const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailMovie"
        component={DetailMovieScreen}
        options={{
          title: 'About the Book',
          headerStyle: { backgroundColor: '#bca89f' },
          headerTitleStyle: { color: 'white', fontSize: 24 },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
