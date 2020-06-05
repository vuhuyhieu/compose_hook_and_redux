import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {scaleModerate, scaleVertical} from '../../utils/Scale';
import * as COLOR from '../../utils/Colors';
import {
  detectEmailAndPhoneNumber,
  isWeekPassword,
} from '../../actions/Validate';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_ACTION} from '../../actions/ActionsType';
import {BOTTOM_TAB} from '../../navigation/RouteName';
import {LoadingDialog} from '../../component/LoadingDialog';
import {loginApi} from '../../api/AuthApi';

const {width, height} = Dimensions.get('window');

export default function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const noInputError =
    username && password && passwordError === '' && usernameError === '';
  const {messageDialog} = useSelector(state => state.commonReducer);
  const dispatch = useDispatch();
  const data = {username, password};

  const _onPressLogin = async () => {
    if (noInputError) {
      setLoading(true);
      const response = await loginApi(data);
      setLoading(false);
      if (response?.data?.code === 0) {
        props.navigation.navigate(BOTTOM_TAB);
      }
    }
  };

  const _processUsername = text => {
    setUsername(text);
    if (!username) {
      setUsernameError('Email cannot be empty!');
    } else if (
      detectEmailAndPhoneNumber(username) !== 'email' &&
      detectEmailAndPhoneNumber(username) !== 'phone-number'
    ) {
      setUsernameError('Email not in correct format!');
    } else {
      setUsernameError('');
    }
  };

  const _processPassword = text => {
    setPassword(text);
    if (!password) {
      setPasswordError('Password cannot be empty!');
    } else if (isWeekPassword(password)) {
      setPasswordError('Week password!');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    return () => {
      console.log('login component will unmount');
    };
  });

  return (
    <View style={styles.container}>
      {console.log('render login screen')}
      <TextInput
        value={username}
        style={usernameError !== '' ? styles.textInputError : styles.textInput}
        placeholder={'username'}
        autoCapitalize={'none'}
        onChangeText={text => _processUsername(text)}
      />
      {usernameError !== '' && (
        <Text style={styles.errorText}>{usernameError}</Text>
      )}
      <TextInput
        value={password}
        style={passwordError !== '' ? styles.textInputError : styles.textInput}
        placeholder={'password'}
        autoCapitalize={'none'}
        secureTextEntry={true}
        onChangeText={text => _processPassword(text)}
      />
      {passwordError !== '' && (
        <Text style={styles.errorText}>{passwordError}</Text>
      )}
      <TouchableOpacity
        onPress={_onPressLogin}
        activeOpacity={noInputError ? 0 : 1}
        style={[
          styles.textInput,
          {
            backgroundColor: noInputError ? COLOR.NL_ORANGE : COLOR.DISABLED,
            alignItems: 'center',
            paddingVertical: scaleVertical(10),
          },
        ]}>
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>
      {loading && <LoadingDialog />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleModerate(20),
  },
  textInput: {
    width: '100%',
    paddingVertical: scaleVertical(5),
    borderRadius: scaleModerate(8),
    borderWidth: scaleModerate(0.7),
    borderColor: COLOR.BORDER_BOTTOM_COLOR,
    marginTop: scaleVertical(10),
  },
  textInputError: {
    width: '100%',
    paddingVertical: scaleVertical(5),
    borderRadius: scaleModerate(8),
    borderWidth: scaleModerate(0.7),
    borderColor: COLOR.ERROR,
    marginTop: scaleVertical(10),
  },
  errorText: {
    color: COLOR.ERROR,
    fontSize: scaleModerate(12),
    textAlign: 'left',
    marginTop: scaleModerate(5),
  },
  textButton: {
    fontWeight: 'bold',
    color: COLOR.WHITE,
  },
});
