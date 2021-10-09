import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Button, StyleSheet, Text, View  } from 'react-native';

export default function App() {
  const [text , setText] = useState('i am the defaulted text ')
  const changeText = ()=>{

    setText('the work, is done go to sleep now')
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <Button onPress={changeText}  title="click here" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    color:'#fcb515',
    justifyContent: 'center',
  },
 
});
