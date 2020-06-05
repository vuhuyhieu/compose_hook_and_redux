import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

export default function AccountScreen() {
  const countData = useSelector(state => state.homeReducer);
  const [count, setCount] = useState(countData);

  useEffect(() => {
    setCount(countData);
  }, [countData]);

  useEffect(() => {
    return () => {
      console.log('component will unmount');
    };
  });

  return (
    <View style={styles.container}>
      {console.log('render account screen')}
      <Text>{count}</Text>
      {/*<Text>{state?.rawCounter}</Text>*/}
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
