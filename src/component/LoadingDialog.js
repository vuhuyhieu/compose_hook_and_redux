import React from 'react';
import {Modal, View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {padding, texts} from '../utils/Styles';
import * as COLOR from '../utils/Colors';
import {scaleModerate} from '../utils/Scale';

export function LoadingDialog(props) {
  const _onPressCancel = () => props.cancel();

  return (
    <View style={styles.full}>
      {console.log('render loading screen')}
      <Modal
        animationType={'fade'}
        visible={true}
        transparent={true}
        onRequestClose={() => _onPressCancel()}>
        <View style={styles.container}>
          <View style={[styles.loadingArea, padding.v_md, padding.h_md]}>
            <ActivityIndicator color={COLOR.NL_ORANGE} size={'large'} />
            <Text style={[texts.normal, {marginLeft: scaleModerate(10)}]}>
              {props.message || 'Connecting'}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    elevation: 8,
  },
  loadingArea: {
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  loadingText: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
