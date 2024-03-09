import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles';
import {userTaskInfo} from '../../api/auth';
import {useDispatch, useSelector} from 'react-redux';
import {setPersonalTaskList} from '../../redux/PersonalTask/action';
import {personalDetailsSelector} from '../../redux/PersonalTask/selectors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DisplayBanner from '../../components/DisplayBanner';

const Personal = props => {
  const dispatch = useDispatch();
  const taskList = useSelector(personalDetailsSelector);
  const [indicate, setIndicate] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('');
  const [bannerTitle, setBannerTitle] = useState('');


  useEffect(() => {
    getUserPersonalData();
  }, []);

  const getUserPersonalData = async () => {
    setIndicate(true);
    const resultOfPersonalTask = await userTaskInfo('personal');
    console.log('resultOfPersonalTask', resultOfPersonalTask);
    dispatch(setPersonalTaskList(resultOfPersonalTask.Personal));
    setIndicate(false);
  };

  const onCancelBanner = () => {
    //props.navigation.navigate('BottomTabs');
    setBannerVisible(false);
  };

  const setAletBanner = async(item) => {
    await setBannerTitle(item.Title)
    await setBannerMessage(item.Description)
    setBannerVisible(true);

  }


  const renderItem = ({item, index}) => {
  
    return (
      <TouchableOpacity style={styles.dataContainer} key={item.Id} onPress={() => setAletBanner(item)}>
        <View style={styles.taskView}>
          <View style={styles.taskViewSub}>
            <Image
              source={require('../../assets/checkmark.png')}
              style={styles.imagesty}
            />
            <Text style={styles.titleTxt}>{item.Title}</Text>
          </View>

          <View style={{marginRight: wp(5)}}>
            <View>
              <Text style={{fontWeight: '500', color:'red'}}>{item.DueDate}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
          <DisplayBanner
            status={bannerVisible}
            title={bannerTitle}
            message={bannerMessage}
            navigation={props.navigation}
            onCancel={onCancelBanner}
          />
      <View style={styles.topperSec}>
        <Text style={styles.headingText}>Personal Task List</Text>
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/add.png')}
              style={styles.assimagesty} />
              <Text style={{ justifyContent:'center', color:Colors.WHITE}}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginVertical: wp(4)}}>
        <FlatList
          data={taskList}
          renderItem={renderItem}
          keyExtractor={item => item.Id}
        />
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

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  topperSec: {
    height: hp(12),
    backgroundColor: Colors.THEME_PINK,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row',
  },
  headingText: {
    fontSize: RF(3),
    color: Colors.WHITE,
    fontWeight: '700',
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

  dataContainer: {
    width: wp(90),
    height: hp(7),
    borderWidth: 1,
    borderColor: Colors.LITE_ASH,
    marginVertical: wp(2),
    justifyContent: 'center',
  },
  imagesty: {
    width: wp(7),
    height: wp(7),
    margin: wp(4),
  },
  assimagesty:{
    width: wp(4),
    height: wp(4),
    margin: wp(2),
    tintColor:Colors.WHITE,
  },
  taskView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskViewSub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: RF(1.8),
  },
});
