
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
// import {DynamicCollage, StaticCollage} from 'react-native-images-collage';
import Header from '../../9Grid/Header';
import LinearGradient from 'react-native-linear-gradient';
import Share from "react-native-share";
// import {MatrixTransform} from 'react-native';
// const Sample= ({props, route, navigation}) => {
const win = Dimensions.get('window');
const Swipe3 = ({props, route, navigation}) => {
  
  
  const items = route.params;
  const [Mypic, setMypic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });

 
const url =`data:${items.img.mime};base64,${items.img.data}`;
const title = "Awesome Contents";
const message = "Please check this out.";

const options = {
  title,
  url,
  message,

};
const share = async (customOptions = options) => {
  try {
    await Share.open(customOptions);
   
  } catch (err) {
    console.log(err);
  }
};

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#E4D9FB',
        height: Dimensions.get('window').height,
        // margin:1
      }}>
      <View
        style={{
          backgroundColor: '#E4D9FB',
          height: Dimensions.get('window').height,
        }}>
        <LinearGradient
          colors={['#ffffff', '#E4D5F9']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={style.card}>
            <Header navigation={navigation} title="Repost" />
          </View>
        </LinearGradient>

       
        <View
          style={{
            flexDirection: 'column',
            bottom: 20,
           
          }}>
        
        </View>

        <View
          style={{
            width: '100%',
            height: '55%',
            margin: 13,
            marginTop: '15%',
            flexDirection: 'row',
          }}>
          <Image source={Mypic} style={{height: '100%', width: '90%'}} />
        </View>
        

          <View style={{
            alignItems: 'center',
            marginTop:"20%"
          }}>
            <TouchableOpacity  onPress={async () => {
              Share.Social.INSTAGRAM_STORIES,
              await share();
              
            }}
              style={{
                // alignItems: 'center',
                borderRadius: 15,
                backgroundColor: '#3672E9',
                width: win.width/3,
                height: win.height/12,
               
                borderRadius: 15,
               
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                }}>
                Repost
              </Text>
            </TouchableOpacity>
          </View>
        </View>
   
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: 15,
    height: 15,
    // alignContent:'center',
    borderRadius: 15,
  },
  sectionContainer: {
    marginTop: 3,
    paddingHorizontal: 4,
    borderColor: 'red',
    borderWidth: 1,
  },
  but: {
    alignItems: 'center',
    // flex:0.1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: 79,
    height: 39,

    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // position:'absolute'
  },
  butext: {
    color: 'black',
    fontSize: 16,
    // fontWeight: '500',
  },
  buttons: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // bottom:10,
    marginTop: 10,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Swipe3;
