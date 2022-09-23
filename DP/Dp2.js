import React, {useRef,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
  ImageBackground
} from 'react-native';

import {captureRef} from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../9Grid/Header';
import Frame from '../src/Components/Frame';


const Dp2 = ({route,navigation}) => {
  // create a ref
  const viewRef = useRef();
  const items = route.params;
  // const componentRef = useRef();
  const [userpic, setuserpic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });
  const [cropped,setCropped] = useState(0);


      const cropMe1 = () => {
        setCropped(200);
      };

  // get permission on android
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      // handle error as you please
      console.log('err', err);
    }
  };

  // download image
  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        if (!granted) {
          return;
        }
      }

      // cameraroll saves image
      const image = CameraRoll.save(uri, 'photo');
      if (image) {
        Alert.alert(
          '',
          'Image saved successfully.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
          <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={{borderWidth:1.5, borderColor:'#F5E2F4'}}>
          <Header navigation={navigation} title="Dp Creator" />
        </View>
      
      <View style={{width:'100%', height:414,justifyContent:'center',alignItems:'center', marginTop:'8%'}}>
            <View style={{justifyContent:'center',
            alignItems:'center',
                width:'100%',
                height: 390,
                backgroundColor: 'grey',
                borderRadius:cropped}} ref={viewRef}>
           
              <Image source={userpic} resizeMode="cover" style={{width: '100%', height: 390,
            borderRadius:cropped}}/>
              
             
              <TouchableOpacity 
              onPress={cropMe1}
      style={{width:'100%',height: 390,alignSelf:'center',position:'absolute',
      borderWidth:5, borderColor:'red',borderRadius:200, marginTop:'2%'}}
      
      >
        </TouchableOpacity> 
        
            </View>
            </View>
            
          </LinearGradient>
             
            <TouchableOpacity style={{ position:'absolute',
            backgroundColor: '#3672E9',marginLeft:'80%',width:30,marginTop:'5%',
             borderRadius: 5,paddingTop:5,paddingBottom:5
          }} onPress={downloadImage}>
              <Text style={{color:'white', fontSize:15,alignSelf:'center'}}>Done</Text>
            </TouchableOpacity>
           <Frame/>
        </ScrollView>
        </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#F5E2F4',
    height:'100%',
    
  },

  text: {
    textAlign: 'center',
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
  },
  button: {
   
   
   
   
   
  },
});

export default Dp2;