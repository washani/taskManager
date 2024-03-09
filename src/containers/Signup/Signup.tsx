import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  TextInput,
  Alert
} from 'react-native';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles';
import {userRegister} from '../../api/auth';

const Signup = (props: any) => {
  const [userEmail, setUserEmail] = useState('');
  const [mobNumer, setMobNumer] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [indicate, setIndicate] = useState(false);
  const [errormsg, setErrormsg] = useState('');

  const userNameRef = useRef<TextInput | null>(null);
  const mobNumberRef = useRef<TextInput | null>(null);
  const passRef = useRef<TextInput | null>(null);
  const passconfirmRef = useRef<TextInput | null>(null);


  //======== User Information validation and API call integration ==========
  const submitSignup = async () => {
    setIndicate(true);
    try {
      const regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!userEmail || regEmail.test(userEmail.trim()) != true) {
        setErrormsg('Please enter Your Name');
        setIndicate(false);
        return;
      }
      if (!mobNumer) {
        setErrormsg('Please enter a valid mobile number');
        setIndicate(false);
        return;
      }
      if (!password || !confirmPass) {
        setErrormsg('Enter the password please');
        setIndicate(false);
        return;
      }
      if (password.trim() !== confirmPass.trim()) {
        setErrormsg('Password And Confirm Password Does Not Match');
        setIndicate(false);
        return;
      }
      setErrormsg('');

      const signupInfo = {
        "username": userEmail,
        "contactNo": mobNumer,
        "password": confirmPass,
      }
      const resultOfSignup = await userRegister(signupInfo);
      setIndicate(false);

//======== Check API status and navigate into Login ==========
      if(resultOfSignup.status) {
        Alert.alert('Signup Success. Please Login')
        props.navigation.navigate("Login");
      } else {
        Alert.alert('Signup not success. Please try again')
      }
    } catch (message) {
      console.log('error', message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <View style={styles.subContainer}>
          <Text style={styles.headingtxt}>Create account</Text>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={Colors.ASH_COLOR}
            style={styles.textInput}
            value={userEmail}
            onChangeText={e => setUserEmail(e)}
            returnKeyType="next"
            onSubmitEditing={() => {
              mobNumberRef.current?.focus();
            }}
            ref={userNameRef}
          />

          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor={Colors.ASH_COLOR}
            style={styles.textInput}
            value={mobNumer}
            onChangeText={e => setMobNumer(e)}
            keyboardType={'phone-pad'}
            returnKeyType="done"
            onSubmitEditing={() => {
              passRef.current?.focus();
            }}
            ref={mobNumberRef}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.ASH_COLOR}
            style={styles.textInput}
            value={password}
            ref={passRef}
            onChangeText={e => setPassword(e)}
            returnKeyType="next"
            secureTextEntry={true}
            onSubmitEditing={() => {
              passconfirmRef.current?.focus();
            }}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={Colors.ASH_COLOR}
            style={styles.textInput}
            value={confirmPass}
            ref={passconfirmRef}
            secureTextEntry={true}
            onChangeText={e => setConfirmPass(e)}
            returnKeyType="done"
          />
          {errormsg !== '' ? (
            <View style={styles.errormsgcommon}>
              <Text style={styles.errormsgtxt}>{errormsg}</Text>
            </View>
          ) : (
            <></>
          )}
          <TouchableOpacity
            style={styles.signupbtn}
            onPress={() => submitSignup()}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.bottomTxt}>
            <Text style={{marginRight: wp(2)}}>Already a user?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.loginbtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  subContainer: {
    margin: wp(10),
  },
  headingtxt: {
    fontSize: RF(3),
    fontWeight: '700',
    marginBottom: hp(3.5),
    color: Colors.THEME_PURPLE,
    textAlign: 'center',
  },
  textInput: {
    padding: wp(3.5),
    borderWidth: 0.4,
    borderColor: Colors.ASH_COLOR,
    marginTop: hp(2),
    backgroundColor: Colors.WHITE,
    color: Colors.ASH_COLOR,
  },
  signupbtn: {
    padding: wp(3.5),
    backgroundColor: Colors.THEME_PINK,
    marginTop: hp(3),
    borderRadius: 6,
  },
  btnTxt: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontWeight: '600',
    fontSize: RF(1.8),
  },
  bottomTxt: {
    flexDirection: 'row',
    marginTop: wp(3),
    alignSelf: 'center',
  },
  loginbtn: {
    color: Colors.THEME_PINK,
    fontWeight: '600',
  },
  errormsgcommon: {
    alignItems: 'center',
    marginTop: hp(4),
  },
  errormsg: {
    alignItems: 'flex-start',
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
