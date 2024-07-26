import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native';
const CustomButton  = ({ title, onPress  }) => {
  return (
   
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        );
      };
      
      const styles = StyleSheet.create({
        button: {
          backgroundColor: '#007BFF',
          width: 32, 
          height: 32, 
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
         
        },
        buttonText: {
          color: '#FFFFFF',
          fontSize:30,
        },
        
        
      });
export default CustomButton

