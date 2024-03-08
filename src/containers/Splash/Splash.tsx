import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../styles';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from 'react-native-responsive-dimensions';

const Splash = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subSection}>
        <Image
          source={require('../../assets/taskman.png')}
          style={styles.middleImage}
        />
        <View style={styles.getStartTxt}>
          <Text style={styles.titleTxt}>Task Manager</Text>
          <Text style={styles.subTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.startTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  middleImage: {
    alignItems: 'center',
    width: wp(50),
    height: wp(50),
  },
  subSection: {
    alignItems: 'center',
    marginVertical: wp(25),
  },
  startBtn: {
    backgroundColor: Colors.THEME_PINK,
    width: wp(65),
    padding: wp(3),
    marginBottom: hp(2),
    borderRadius: 6,
  },
  startTxt: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: RF(1.6),
  },
  getStartTxt: {
    padding: wp(4),
  },
  titleTxt: {
    fontSize: RF(4),
    textAlign: 'center',
    paddingVertical: wp(8),
    fontWeight: '700',
    color: Colors.THEME_PURPLE,
  },
  subTxt: {
    fontSize: RF(2),
    textAlign: 'center',
    padding: wp(4),
    fontWeight: '400',
  },
});
