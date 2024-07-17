
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import CustomButton from '../component/CustomBotton';




export default function HomeScreen() {

  const navigation = useNavigation();
  const handleNavigation = () => {



  }

  const homeData = [
    {
      image: require('./../assets/pdf.png'),
      title: "Latest design screenshot.pdf",
    },
    {
      image: require('./../assets/word.png'),
      title: "Latest design screenshot.pdf",
    },
    {
      image: require('./../assets/pdf.png'),
      title: "Latest design screenshot.pdf",
    },
    {
      image: require('./../assets/word.png'),
      title: "Latest design screenshot.pdf",
    },
    {
      image: require('./../assets/pdf.png'),
      title: "Latest design screenshot.pdf",
    },
    {
      image: require('./../assets/word.png'),
      title: "Latest design screenshot.pdf",
    },

  ];

  return (


    <SafeAreaView style={{ flex: 1, marginTop: 30, margin: 16 }}>
      <Text style={{ fontSize: 40, marginTop: 20, fontWeight: 'bold', }}>
        My
        Files
      </Text>
      <TextInput placeholder='Search Files' clearButtonMode='always' style={{ paddingHorizontal: 20, paddingVertical: 10, borderColor: '#ccc', borderWidth: 2, borderRadius: 15, marginTop: 20 }} />

      <ScrollView>

        <View>
          {homeData.map((data, index) => (
            <View key={index} style={styles.container}>
              <View style={styles.contain}>
                <Image source={data.image}
                  style={styles.image} />

                <Text style={styles.text}>
                  {data.title}
                </Text>
                <Image source={require('./../assets/check 1.png')}
                  style={styles.image1} />



              </View>
            </View>
          ))}
        </View>










      </ScrollView>




    </SafeAreaView>


  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 15,
    padding: 14,
    borderColor: '#ccc',
    borderWidth: 2

  },


  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: '2',

  },

  image: {
    width: 32,
    height: 32,
  },
  image1: {
    width: 32,
    height: 32,
    marginHorizontal: 40




  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3F7CF1',
    textAlign: 'center'
  },
});







//  const styles = StyleSheet.create({
// container: {
//   flex:1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center'
// },

//  })


// const navigation = useNavigation();