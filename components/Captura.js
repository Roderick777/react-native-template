import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Avatar, Card, TextInput, Button } from 'react-native-paper';
import axios from 'axios';
// import {CvImage, CvInvoke, ColorConv, Core, CvCamera} from 'react-native-opencv3';


export default class Captura extends Component {

  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Captura',
  };

  
  state = {
    active: 'first',
    recursos: null,
  };

  onFrameSize(){

  }

  onPayload(){

  }

  render() {
    const { active } = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          {/* <CvInvokeGroup groupid='invokeGroup1'>
                <CvInvoke func='normalize' params={{"p1":histogramMat,"p2":histogramMat,"p3":halfHeight,"p4":0,"p5":1}} callback='onPayload'/>
                <CvInvoke func='calcHist' params={{"p1":"rgba","p2":channelOne,"p3":maskMat,"p4":histogramMat,"p5":histSize,"p6":ranges}}/>
                <CvInvokeGroup groupid='invokeGroup0'>
                    <CvInvoke func='normalize' params={{"p1":histogramMat,"p2":histogramMat,"p3":halfHeight,"p4":0,"p5":1}} callback='onPayload'/>
                    <CvInvoke func='calcHist' params={{"p1":"rgba","p2":channelZero,"p3":maskMat,"p4":histogramMat,"p5":histSize,"p6":ranges}}/>
                    <CvCamera ref={this.cvCamera} style={{ width: '100%', height: '100%', position: 'absolute' }} 
                        overlayInterval={overlayInt}
                        onPayload={this.onPayload}
                        onFrameSize={this.onFrameSize}
                    />
                </CvInvokeGroup>
                </CvInvokeGroup> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 30, 
    paddingBottom: 5
  },
  scrollv:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5

  },
  card:{
    marginLeft: 3,
    marginRight: 3, 
    marginBottom:5,
    marginTop: 5
  }

});
