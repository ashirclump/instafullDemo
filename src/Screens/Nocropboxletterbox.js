import React, {Component, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  ImageBackground,
  Image,
  AppRegistry,
  PermissionsAndroid,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';
import {captureRef} from 'react-native-view-shot';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import RNFetchBlob from 'rn-fetch-blob';

import {RadialGradient} from 'react-native-svg';

import Slider from '@react-native-community/slider';
import FrameBox from '../Components/FrameBox';
// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Nocropboxletterbox = ({props, route, navigation}) => {
  const viewRef = useRef();
  let items = route.params;
  const win= Dimensions.get('window')
  const [Mypic, setMypic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });


  const [cropped,setCropped] = useState(0);
  const [frames,setFrames] = useState(PutFrame1);
  const [big,setBig]= useState();
  const [badg,setBadg] = useState();
  const [Option, setOption] = useState(true);
  const PutFrame1 = () => {
    setFrames(require('../../FrameBox/Rectangle128.png'));
  }
  const PutFrame2 = () => {
    setFrames(require('../../FrameBox/Rectangle129.png'));
  }
  const PutFrame3 = () => {
    setFrames(require('../../FrameBox/Rectangle130.png'));
  }
  const PutFrame4 = () => {
    setFrames(require('../../FrameBox/Rectangle131.png'));
  }
  const PutFrame5 = () => {
    setFrames(require('../../FrameBox/Rectangle132.png'));
  }
  const PutFrame6 = () => {
    setFrames(require('../../FrameBox/Rectangle133.png'));
  }
  const PutFrame7 = () => {
    setFrames(require('../../FrameBox/Rectangle134.png'));
  }
  const PutFrame8 = () => {
    setFrames(require('../../FrameBox/Rectangle135.png'));
  }
  const PutFrame9 = () => {
    setFrames(require('../../FrameBox/Rectangle136.png'));
  }
 

  const Blur = ()=> {
    const [Slidor, setSlidor] = useState(100);
return (
      
  <View
  style={{flexDirection: 'row', alignItems: 'center',marginBottom:40}}>
  <Slider
    style={{width: '65%', height: 10, marginLeft: 45}}
    minimumValue={50}
    maximumValue={2}
    minimumTrackTintColor="red"
    maximumTrackTintColor="black"
    onValueChange={value => {
      setSlidor(value);
    }}
    trackImage={blackline}
    thumbImage={blackcircle}
    inverted={true}
  />
  <Text style={{fontSize: 11, fontWeight: '500', color: 'red'}}>
    {parseInt(Slidor)}%
  </Text>
  

</View>
 
    )
  };
 

  const Ifont = 'Poplin';
  const defaultimg = require('../../assets/standman.png');
  const blackline = require('../../assets/pics/blackline.png');
  const blackcircle = require('../../assets/pics/blackcircle.png');

  const [Slidervalue, setSlidervalue] = useState(100);
  const [Slidor, setSlidor] = useState(200);
  const [Counter, setCounter] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);
  const [should, setShould] = useState(false);
  const [Letter, setLetter] = useState(true);
  const [er, seter] = useState(true);


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
    <ScrollView
      style={{
        backgroundColor: '#EFE7FC',
        // height:win.height/20,
      }}>
      <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
       
          <Header navigation={navigation} title="No Crop Post (letter box)" />
        
      </LinearGradient>

      <View
        style={{
       
          width: win.width/1,
          height: win.height/1.8,
          marginTop: '10%',
          
          backgroundColor:'#ECDCF7',
          
        }}
        ref={viewRef}>
        {shouldShow?
        <Image
          source={Mypic}
          style={{height: win.height/1.8, width: win.width/1}}
          // resizeMode="contain"
          blurRadius={Slidervalue}
        />:null
        }
        <View style={{height: win.height/1.8,width:win.width/1,position:'absolute',
       
       
      }} >
        <Image source={frames} style={{width: win.width/1,height:win.height/1.8,position:'absolute',backgroundColor:shouldShow ? null : frames}}/>
        </View>

        <View style={{height: win.height/1.8,width:win.width/1,position:'absolute',
       
        // aspectRatio: Slidor
      }} >
        <Image
          source={Mypic}
          style={{height: win.height/1.8,width:Slidor,
          marginLeft:win.width/6,
          backgroundColor:"white"
          // aspectRatio: Slidor
        }}
          // resizeMode="contain"
          blurRadius={0}
        />
        </View>
        </View>
        {shouldShow ? (
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
           
            <Slider
              style={{width: '65%', height: 40, marginLeft: 45}}
              minimumValue={100}
              maximumValue={0}
              minimumTrackTintColor="black"
              maximumTrackTintColor="black"
              onValueChange={value => {
                setSlidervalue(value);
              }}
              trackImage={blackline}
              thumbImage={blackcircle}
              inverted={true}
            /> 
           <Text style={{fontSize: 11, fontWeight: '500', color: '#000'}}>
              {parseInt(Slidervalue)}%
            </Text>
          </View> ) : null}
          
           {should ? ( <FrameBox  Put1={PutFrame1} Put={setFrames}  Put2={PutFrame2} Put3={PutFrame3} Put4={PutFrame4} Put5={PutFrame5} 
            Put6={PutFrame6} Put7={PutFrame7} Put8={PutFrame8} Put9={PutFrame9}/> ) :  null}
          
            {Letter?( <View
              style={{flexDirection: 'row', alignItems: 'center',marginBottom:40}}>
              <Slider
                style={{width: '65%', height: 10, marginLeft: 45}}
                minimumValue={200}
                maximumValue={300}
                minimumTrackTintColor="black"
                maximumTrackTintColor="black"
                onValueChange={value => {
                  setSlidor(value);
                }}
                trackImage={blackline}
                thumbImage={blackcircle}
                inverted={false}
              />
              <Text style={{fontSize: 11, fontWeight: '500', color: 'red'}}>
                {parseInt(Slidor)}%
              </Text>
              
           
            </View>):null}

         

<View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 45,
          marginTop:win.height/20
        }}>
        <TouchableOpacity onPress={() => [setLetter(!Letter),setShouldShow(false),setShould(false),setFrames(),setSlidervalue()]}
          style={{
            
          
          }}>
          <Image
            style={{tintColor: Letter ? '#000' : '#877D88',  height: 22, width: 22}}
            source={require('../../assets/pics/letterbox.png')}
          />
          <Text
            style={{
              color: '#000',
              marginTop: 7,
              fontSize: 9,
              fontWeight: '500',
            }}>
            Letterbox
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => [setShouldShow(!shouldShow),setShould(false),setFrames(),setLetter(false)]}
          style={{
            
           
          
          }}>
          <Image
            style={{tintColor: shouldShow ? '#000' : '#877D88',  height: 22, width: 22}}
            source={require('../../assets/pics/blur1.png')}
          />
          <Text style={{marginTop: 7, fontSize: 9, fontWeight: '500',color:"#000"}}>
            Blur
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => [setShould(!should),setShouldShow(false),setLetter(false)]}
          style={{
           
          
          }}>
          <Image
            style={{tintColor: should ? '#000' : '#877D88',  height: 22, width: 22}}
            source={require('../../assets/pics/background.png')}
          />
          <Text style={{marginTop: 7, fontSize: 9, fontWeight: '500'}}>
            Background
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
           
          
          }}>
          <Image
            style={{tintColor: '#877D88', height: 22, width: 22}}
            source={require('../../assets/pics/crop.png')}
          />
          <Text style={{marginTop: 7, fontSize: 9, fontWeight: '500'}}>
            Crop
          </Text>
        </TouchableOpacity>
      </View>
      </View>

      <View
        style={{
          
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
        
          style={{
            
            borderRadius: 15,
            backgroundColor: '#3672E9',
            width: '70%',
            height: 49,
          margin:10,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop:win.height
          }}
          onPress={downloadImage}>
          <Text
            style={{
              fontFamily: `${Ifont}`,
              color: '#BFF4FF',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default Nocropboxletterbox;

// <Text style={{height:25,width:25,backgroundColor:"red",marginLeft:20}}></Text>
//     <Text style={{height:25,width:25,backgroundColor:"blue",marginLeft:20}}></Text>
//     <Text style={{height:25,width:25,backgroundColor:"yellow",marginLeft:20}}></Text>
//     <Text style={{height:25,width:25,backgroundColor:"green",marginLeft:20}}></Text>
//     <Text style={{height:25,width:25,backgroundColor:"black",marginLeft:20}}></Text>