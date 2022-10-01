import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dpsaverone from './src/Screens/DpSaverone';
import Dpsavertwo from './src/Screens/Dpsavertwo';
import Dpsaverthree from './src/Screens/DpSaverthree';
import Dpsaverfour from './src/Screens/DpSavefour';
import Creativefonts from './src/Screens/CreativeFonts';
import Imageviewer from './src/Screens/ImageViewer';
import Login from './src/Screens/Login';
import Uploadimage from './src/Screens/UploadImage';
import Nocropboxletterbox from './src/Screens/Nocropboxletterbox';
import Dpcreateone from './src/Screens/Dpcreateone';
import Dpcreatortwo from './src/Screens/Dpcreatortwo';
import Sapceadder from './src/Screens/Spaceadder';
import Homepage from './src/Screens/Homepage';
import Tapherebio from './src/Screens/Tapherebio';

import Test from './src/Components/Test';
import Imagecrop from './src/Screens/Imagecrop';

import Sample2 from './9Grid/Sample2';
import RepostUpload from './src/Screens/RepostUpload';
import Mylogin from './src/Screens/Mylogin';
import Repost from './src/Screens/Repost';
import Instalogin from './src/Screens/InstaLogin';
import Signup from './src/Screens/Signup';
import Forgot from './src/Screens/Forgot';
import Reset from './src/Screens/Reset';
import Dpcreator from './src/Screens/Dpcreator';
import Otp from './src/Screens/Otp';
import DpFinal from './src/Screens/DpFinal';
import DpTwo from './DP/DpTwo';
import Dpone from './DP/Dpone';
import Sample from './9Grid/Sample';
import SwipePick from './SwipePick';
import Swipe1 from './Swipe1';
import Swipe2 from './Swipe2';
import Swipe3 from './Swipe3';
import Super from './Super';
import DpPick from './DP/DpPick';
import Tapherenext from './src/Screens/Tapherenext';

// 9gird

import Upload from './9Grid/Upload';

import Dp2 from './DP/Dp2';

import Header from './9Grid/Header';

import Sample3 from './9Grid/Sample3';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen2() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen2</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('helo');
        }}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Uploadimage"
        screenOptions={{
          headerShown: false,
        }}>
       
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dpcreator" component={Dpcreator} />
        <Stack.Screen name="DpPick" component={DpPick} />
        <Stack.Screen name="DpFinal" component={DpFinal} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Tapherenext" component={Tapherenext} />

        <Stack.Screen name="Homepage" component={Homepage} />

        <Stack.Screen name="Upload" component={Upload} />

        <Stack.Screen name="Sample3" component={Sample3} />
        <Stack.Screen name="Sample2" component={Sample2} />
        <Stack.Screen name="Sample" component={Sample} />
        <Stack.Screen name="Uploadimage" component={Uploadimage} />
        <Stack.Screen name="SwipePick" component={SwipePick} />
        <Stack.Screen name="Swipe1" component={Swipe1} />
        <Stack.Screen name="Swipe2" component={Swipe2} />
        <Stack.Screen name="Swipe3" component={Swipe3} />

        <Stack.Screen name="Dpone" component={Dpone} />
        <Stack.Screen name="DpTwo" component={DpTwo} />
        <Stack.Screen name="Dp2" component={Dp2} />

        <Stack.Screen name="Instalogin" component={Instalogin} />
        {/* <Stack.Screen name="Flogin" component={Flogin} /> */}
        <Stack.Screen name="Mylogin" component={Mylogin} />
        <Stack.Screen name="Dpcreatortwo" component={Dpcreatortwo} />

        <Stack.Screen name="Dpcreateone" component={Dpcreateone} />

        <Stack.Screen name="Imagecrop" component={Imagecrop} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Sapceadder" component={Sapceadder} />
        {/* <Stack.Screen name="Fbloginpage" component={Fbloginpage} /> */}
        <Stack.Screen name="Imageviewer" component={Imageviewer} />
        <Stack.Screen
          name="Nocropboxletterbox"
          component={Nocropboxletterbox}
        />
        <Stack.Screen name="Creativefonts" component={Creativefonts} />
        <Stack.Screen name="Dpsaverfour" component={Dpsaverfour} />
        <Stack.Screen name="Dpsaverthree" component={Dpsaverthree} />
        <Stack.Screen name="Dpsavertwo" component={Dpsavertwo} />
        <Stack.Screen name="Dpsaverone" component={Dpsaverone} />
        <Stack.Screen name="Home1" component={HomeScreen} />
        <Stack.Screen name="Home2" component={Screen2} />
        <Stack.Screen name="Tapherebio" component={Tapherebio} />
        <Stack.Screen name="RepostUpload" component={RepostUpload} />
        <Stack.Screen name="Repost" component={Repost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
