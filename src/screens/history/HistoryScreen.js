import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const TIME_DEFAULT = 100;

export default function HistoryScreen() {
  const [time, setTime] = useState(TIME_DEFAULT);
  const [refresh, setRefresh] = useState(true);
  // useEffect(() => {
  //   setTime(TIME_DEFAULT);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(time - 1), 1000);
    return () => {
      console.log('vao day');
      clearInterval(interval);
    };
  }, [time]);

  return (
    <View style={styles.container}>
      {console.log('render history screen')}
      <Text>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
