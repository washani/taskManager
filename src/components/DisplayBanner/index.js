import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ImageBackground,
} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles';

const DisplayBanner = props => {
  const {status, title, message, onCancel} = props;

  return (
    <Modal visible={status} closeOnDragDown={false} closeOnPressMask={false}>
      {message != '' ? (
        <View style={styles.bannerMain}>
          <View style={styles.alertBox}>
            <View style={styles.alertTitle}>
              <Text style={styles.alertTitleText}>{title}</Text>
            </View>
            <View style={styles.alertText}>
              <Text style={styles.alertInfoText}>{message}</Text>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={onCancel} style={styles.updatebtn}>
                <Text style={styles.btnTxt}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onCancel} style={styles.deleteBtn}>
                <Text style={styles.btnTxt}>Delete</Text>
              </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      ) : null}
    </Modal>
  );
};

const styles = StyleSheet.create({
  bannerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  alertBox: {
    height: hp(40),
    width: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: Platform.OS === 'ios' ? 0.1 : 0,
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    shadowColor: Colors.ASH_LIGHT,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.42,
    shadowRadius: 4.22,
    elevation: 4,
  },
  alertTitle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  alertTitleText: {
    fontSize: RF(3),
    fontWeight: '600',
    color: Colors.BLACK,
    color: Colors.THEME_PINK,
  },
  alertText: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertInfoText: {
    fontSize: RF(1.9),
    fontWeight: '500',
    padding: hp(2.6),
    textAlign: 'center',
    color: Colors.BLACK,
  },
  updatebtn:{
    paddingVertical:wp(2),
    paddingHorizontal: wp(4),
    marginRight: wp(3),
    backgroundColor:Colors.THEME_PINK,
    borderRadius: 4,
  },
  deleteBtn:{
    paddingVertical:wp(2),
    paddingHorizontal: wp(4),
    marginRight: wp(3),
    backgroundColor:Colors.THEME_PURPLE,
    borderRadius: 4,
  },
  btnTxt:{
    color:Colors.WHITE,
    fontSize: RF(1.8),
    fontWeight:'600'
  }

});

export default DisplayBanner;
