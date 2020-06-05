import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {buttons, margin, padding, texts} from '../utils/Styles';

export function MessageDialog(props) {
  const _onPressCancel = () => props.cancel();
  return (
    <View style={styles.container}>
      {console.log('render message dialog')}
      <Modal
        animationType={'fade'}
        visible={true}
        transparent={true}
        onRequestClose={() => _onPressCancel()}>
        <View style={[styles.dialogArea, padding.v_md, padding.h_md]}>
          <Text style={texts.h3}>{props.title || 'Notification'}</Text>
          <Text style={[texts.normal]}>{props.message || ''}</Text>
          <TouchableOpacity
            style={[buttons.orange_rounded, margin.v_md]}
            onPress={() => props.close()}>
            <Text style={buttons.white_text}>{props.textButton || 'OK'}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
  },
  dialogArea: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '80%',
  },
});
