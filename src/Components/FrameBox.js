import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const FrameBox = (props) => {
return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
    style={{backgroundColor:'white',marginTop:"2%",}}>
    
<TouchableOpacity onPress={props.Put}>  
    <Image source={require('../../Frame/Ellipse103.png')} style={{height:45,width:45,margin:5}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.Put1}>  
    <Image source={require('../../FrameBox/Rectangle128.png')} style={{height:45,width:45,margin:5}}/>
    </TouchableOpacity>
    <TouchableOpacity  onPress={props.Put2}>
      <Image source={require('../../FrameBox/Rectangle129.png')} style={{height:45,width:45,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.Put3}>
      <Image source={require('../../FrameBox/Rectangle130.png')} style={{height:45,width:45,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put4}>
      <Image source={require('../../FrameBox/Rectangle131.png')} style={{height:45,width:45,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put5}>
      <Image source={require('../../FrameBox/Rectangle132.png')} style={{height:45,width:45,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put6}>
      <Image source={require('../../FrameBox/Rectangle133.png')} style={{height:45,width:45,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put7}>
      <Image source={require('../../FrameBox/Rectangle134.png')} style={{height:45,width:45,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put8}>
      <Image source={require('../../FrameBox/Rectangle135.png')} style={{height:45,width:45,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.Put9}>  
    <Image source={require('../../FrameBox/Rectangle136.png')} style={{height:45,width:45,margin:5}}/>
    </TouchableOpacity>
      
      </ScrollView>
  )
};

export default FrameBox;