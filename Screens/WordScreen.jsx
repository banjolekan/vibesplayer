import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, handleNavigation } from 'react-native';

const WordScreen = () => {
  
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
export default WordScreen;