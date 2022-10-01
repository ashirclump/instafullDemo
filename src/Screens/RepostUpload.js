import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  
} from 'react-native';

import Header from '../Components/Header';

import LinearGradient from 'react-native-linear-gradient';

import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import ShareableReactImage from '../Components/ShareableReactImage';
const Uploadimage = ({navigation}) => {
  const Ifont = 'Poplin';

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      // cropping: true,
      includeBase64: true,
    })
      .then(image => {
        navigation.navigate('Repost', {img: image});
      })
      .catch(e => console.log(e));
  };
  const win = Dimensions.get('window');
  return (
    <View
      style={{
        backgroundColor: '#E4D9FB',
        height: Dimensions.get('window').height,
      }}>
      <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View >
          <Header navigation={navigation} title="Repost Upload" />
        </View>
      </LinearGradient>

      <View
        style={{
        marginTop:'50%',
          alignSelf: 'center',
        
        }}>
        <Text style={styles.head}>1. open instagram</Text>
        <Text style={styles.head}>2. Tap Button</Text>
        <Text style={styles.head}>3. Choose Share to</Text>
        <Text style={styles.head}>4. Tap on instagram (Repost)</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '50%',
        }}>
        <TouchableOpacity
          onPress={openPicker}
          style={{
            shadowColor: '#3672E9',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,

            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: '#3672E9',
            width: '80%',
            height: 59,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: `${Ifont}`,
              color: '#BFF4FF',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Upload Image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    head: {
        color: '#000',
   
        
        fontFamily:"Poppins",
        // fontWeight: '700',
        fontSize: 14,

    },
    
})


export default Uploadimage;
