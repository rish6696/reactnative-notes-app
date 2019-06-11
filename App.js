/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';
import Listitem from './src/components/listitem'



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state={
    placename:'',
    places:[]
  }
  placenameholder=(val)=>{
      this.setState({
        placename:val
      })
  }
  Onpreesd =()=>{

    this.setState((prvstate)=>{
      return {
        places:prvstate.places.concat(prvstate.placename)
      }
    })

  }
  render() {
    const placesname=this.state.places.map((val,i)=>{
      return <Listitem key={i} placename={val}></Listitem>
     //return <Text>{val}</Text>
    })
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>

          <TextInput
           style={styles.input}
           value={this.state.placename}
           placeholder="Enter Your name here"
          
           onChangeText={this.placenameholder}/>

         <Button
         onPress={this.Onpreesd}
         style={styles.button}
          title="ADD NOTE"/>
        </View>

        <View
        style={styles.placesDisBox}  
        >{placesname}</View>
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding:20,
  },
  innerContainer:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white'


  },
  input: {
    width:"70%",
    
    
  },
  button: {
    width:"30%"
  },
  placesDisBox:{
    width:"100%",
    flexDirection:'column',
    justifyContent:'flex-start',

  }
});
