import * as React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeScreen';


import WordScreen from './WordScreen';
import PdfScreen from './PdfScreen';


const Tab = createBottomTabNavigator();

function BottomTabScreen () {
  return (
    
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#3F7CF1" : "gray" }}>{route.name}</Text>
        ),
        tabBarStyle:{
            borderTopWidth: 0.5,
            borderTopColor: 'gray'
        }
      })}
      >
        <Tab.Screen name="Home" component={Home} 
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <MaterialIcons
                  name="home"
                  size={24}
                  color={focused ? "#3F7CF1" : "gray"}
                />
              ),
            }}
        />
        <Tab.Screen name="Pdf" component={PdfScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons
                name="note"
                size={24}
                color={focused ? "#3F7CF1" : "gray"}
              />
            ),
          }} />
        <Tab.Screen name="Word" component={WordScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="article"
              size={24}
              color={focused ? "#3F7CF1" : "gray"}
            />
          ),
        }} />
      

      </Tab.Navigator>
    
  );
}

export default BottomTabScreen;











































































































// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialIcons } from "@expo/vector-icons";
// import { StyleSheet } from "react-native";
// import Home from "./Home";
// import Template from "./Template";


// const Tab = createBottomTabNavigator();

// const BottomTabScreen = () => {
//   return (

// <Tab.Navigator
// tabBarOptions={{
//   activeTintColor: 'red', 
//   inactiveTintColor: 'gray', 
//   labelStyle: {
//     fontSize: 12,
//   },
//   style: {
//     backgroundColor: 'black', 
//   },
// }}
// >
// <Tab.Screen name="Home" component={Home} />
// <Tab.Screen name="Template" component={Template} />
// </Tab.Navigator>

// );
// };
// export default BottomTabScreen;
