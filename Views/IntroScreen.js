import React from 'react'
import { View,StyleSheet,Image } from 'react-native'
import logo from '../assets/calculator_icon.png'
export const IntroScreen = () => {
  return (
    <View style={styles.conatiner}>
        <View style={styles.inner}></View>
        <Image source={logo} style={styles.innerimg}/>

    </View>
  )
}
const styles=StyleSheet.create({
conatiner:{
    display: 'flex',
     flexDirection:'column',
     height: '100%',
     backgroundColor:'#FF5757',
     alignItems:'center',
     justifyContent:'center',
     width:'100%'

},
inner:{
    width:100,
    height:100,
    backgroundColor:'inheit'
},
innerimg:{
    width:100,
    height:100
}
})
export default IntroScreen