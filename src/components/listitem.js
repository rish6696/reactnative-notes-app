import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const listitem = (props) => {
    return (
      <View style={style.vsheet}>
          <Text>
            {props.placename}  
          </Text>
      </View>
    )
}

const style=StyleSheet.create({
    vsheet:{
      
         width:"100%",
         backgroundColor:'#eee',
         padding:20,
         marginBottom:10
    }
})

export default listitem
