import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackActions } from '@react-navigation/native';

const PdfScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Text style={{fontSize:40, fontWeight:'600', color: 'white'}}>pdf to Word</Text>
      </View>
      <View style={styles.whiteBackground}>
        <View style={{flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 15,}}>
    
        <Text style={{fontSize: 18, fontWeight: '600',color: 'black',position: 'absolute',top: 0,left:0, marginTop:5,padding:20}}>Upload Files</Text>
      <View style={{  backgroundColor: "white",borderRadius: 15, padding: 14, borderColor: '#ccc',borderWidth: 1,padding: 30,marginTop:50
    }} >
      <Image source={require('./../assets/upload4.png')} style={{ justifyContent:'center',alignItems: 'center',width: 32,height: 32,marginHorizontal: 120 }}
      />
<Text style ={{ fontSize: 15, fontWeight: 300,alignItems:'center',textAlign: 'center',lineHeight:18, margin:15,}}>Browse and chose the files you want to upload</Text>
<Image source={require('./../assets/plus2.png')} style={{ justifyContent:'center',alignItems: 'center',width: 32,height: 32,marginHorizontal: 120 }}
/>
</View>
      </View>
      
      
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
    
    

  },
});
  

   
export default PdfScreen;
