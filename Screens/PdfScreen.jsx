import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackActions } from '@react-navigation/native';

const PdfScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Text style={styles.text}>Word to pdf</Text>
      </View>
      <View style={styles.whiteBackground}>
        <Text style={styles.text}>This</Text>
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueBackground: {
    flex: 1,
    backgroundColor: '#3F7CF1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBackground: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
  },
});
  

   
export default PdfScreen;
