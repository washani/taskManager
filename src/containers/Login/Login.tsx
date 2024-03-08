import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../styles';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from 'react-native-responsive-dimensions';

const Login = (props: any) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, setErrormsg] = useState('');
  const [indicate, setIndicate] = useState(false);

  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const submitUserLogins = async () => {
    setIndicate(true);
    try {
      const regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!userEmail || regEmail.test(userEmail.trim()) != true) {
        setErrormsg('Please enter a valid email address');
        setIndicate(false);
        return;
      }
      if (!password) {
        setErrormsg('Password field is required');
        setIndicate(false);
        return;
      }

      setErrormsg('');
      const signInInfo = {
        UserName: userEmail,
        Password: password,
      };
      props.navigation.navigate("BottomTabs");
    } catch (message: any) {
      console.log('message', message);
      setErrormsg(message);
      setIndicate(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.welcometxt}>Welcome</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="User Email"
            placeholderTextColor={Colors.ASH_COLOR}
            value={userEmail}
            autoCapitalize="none"
            onChangeText={e => setUserEmail(e)}
            returnKeyType="done"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
            ref={emailRef}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={Colors.ASH_COLOR}
            value={password}
            onChangeText={e => setPassword(e)}
            returnKeyType="done"
            ref={passwordRef}
            secureTextEntry={true}
          />
        </View>
        {errormsg !== '' ? (
          <View style={styles.errormsg}>
            <Text style={styles.errormsgtxt}>{errormsg}</Text>
          </View>
        ) : (
          <></>
        )}

        <View style={{marginVertical: hp(5)}}>
          <TouchableOpacity
            style={styles.loginbtn}
            onPress={() => submitUserLogins()}>
            <Text style={styles.logintxt}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupSection}>
          <Text style={{paddingRight: wp(3)}}>Are you a new user?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.signuptxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {indicate ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={Colors.ASH_COLOR} />
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  itemContainer: {
    padding: wp(10),
    marginVertical: hp(5),
  },
  welcometxt: {
    fontSize: RF(3),
    fontWeight: '700',
    marginBottom: hp(3.5),
    color: Colors.THEME_PURPLE,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    padding: wp(4),
    marginVertical: hp(1),
    borderWidth: 0.3,
    borderColor: Colors.ASH_COLOR,
    color: Colors.ASH_COLOR,
  },
  loginbtn: {
    backgroundColor: Colors.THEME_PINK,
    padding: wp(4),
    borderRadius: 6,
  },
  logintxt: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: RF(1.8),
    fontWeight: '700',
  },
  signupSection: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signuptxt: {
    color: Colors.THEME_PINK,
    fontWeight: '600',
  },
  errormsg: {
    alignItems: 'center',
    marginTop: hp(4),
  },
  errormsgtxt: {
    color: Colors.ERROR,
    fontSize: RF(1.6),
    fontWeight: '500',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF99',
  },
});
