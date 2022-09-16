import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../9Grid/Header';
import { exportComponentAsJPEG} from 'react-component-export-image';
import download from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
// import MaskedView from '@react-native-community/masked-view';

import borderframe from './index';
import Allbadge from './badge';

const Dp2 = ({route, navigation}) => {

    const items = route.params;
  // const componentRef = useRef();
  const [userpic, setuserpic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });

  return (
    <View>
    <LinearGradient
    colors={['#ffffff', '#ECDCF7']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}>
    <View style={{}}>
      <Header navigation={navigation} title="Dp Creator" />
    </View>
  </LinearGradient>


<Image style={{height: 400, width: 400,alignSelf:'center', marginTop:'10%', borderRadius:200}}
source={userpic}/>

    </View>
  )
}

export default Dp2;