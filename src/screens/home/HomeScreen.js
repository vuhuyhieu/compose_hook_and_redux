import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {scaleModerate, scaleVertical} from '../../utils/Scale';
import * as COLOR from '../../utils/Colors';
import {DECREMENT_ACTION, INCREMENT_ACTION} from '../../actions/ActionsType';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const counter = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  const _increaseCounter = useCallback(
    () => dispatch({type: INCREMENT_ACTION, value: 1}),
    [dispatch],
  );
  const _decreaseCounter = useCallback(
    () => dispatch({type: DECREMENT_ACTION, value: 1}),
    [dispatch],
  );

  return (
    <View style={styles.container}>
      {console.log('render home screen')}
      <View style={styles.counterArea}>
        <TouchableOpacity style={styles.button} onPress={_increaseCounter}>
          <Text style={styles.textInButton}>+</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{counter}</Text>
        <TouchableOpacity style={styles.button} onPress={_decreaseCounter}>
          <Text style={styles.textInButton}>-</Text>
        </TouchableOpacity>
      </View>
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
  counterArea: {
    paddingVertical: scaleVertical(10),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: scaleModerate(40),
    width: scaleModerate(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.NL_ORANGE,
    borderRadius: scaleModerate(10),
  },
  textInButton: {
    color: COLOR.WHITE,
    fontSize: scaleModerate(20),
  },
  text: {
    marginHorizontal: scaleModerate(20),
  },
});
