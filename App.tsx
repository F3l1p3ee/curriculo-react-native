import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <View style={styles.page}>
        <Text style={styles.nome}>Fefinho</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'black',
  },

  nome: {
    color: 'white',
  },
});

export default App;
