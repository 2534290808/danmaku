/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
import DanmakuView from "./DanmakuView";

export default class danma extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DanmakuView speed={1.2} maxLines={3} isOverlap={true} ref={ref=>this.mytext=ref} style={{flex:1,height:200,backgroundColor:'red',zIndex:100}}/>
          {/*<DanmakuView style={{width:300,height:200,borderWidth:1,borderColor:'red',zIndex:5}} init={{maxLine:5,isOverlap:false}}/>*/}
        <Button title="发送" onPress={()=>{
            this.mytext&&this.mytext.addDanmaku({text:'黎明宇，黎明宇',fontSize:36,color:'green',padding:20})
        }}/>
        <Button title="暂停" onPress={()=>{
            this.mytext&&this.mytext.pause();
        }}/>
        <Button title="重启" onPress={()=>{
            this.mytext&&this.mytext.resume();}}/>
        <Button title="隐藏" onPress={()=>{
            this.mytext&&this.mytext.hide();
        }}/>
        <Button title="显示" onPress={()=>{
            this.mytext&&this.mytext.show();
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('danma', () => danma);
