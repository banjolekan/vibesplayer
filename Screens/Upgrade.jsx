import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Upgrade = () => {
  return (
    <View style={styles.container}>
      <Text>Upgrade</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Upgrade;