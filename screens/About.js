import { View, Text, StyleSheet,TouchableOpacity  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = () => {
  const navigate = useNavigation()
  return (
    <View>
      <Text style={styles.heading}>
        About
      </Text>
      <Text style={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Duis at tellus at urna condimentum mattis pellentesque id nibh. Aliquam eleifend mi in nulla. Ornare lectus sit amet est placerat in egestas.
        Vel orci porta non pulvinar.
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={()=>navigate.goBack()}>
        <Text style={styles.TextButton}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:35,
    textAlign:'center',

  },
  para:{
    fontSize:20,
    margin:5,
  },
  backButton:{
    marginTop:15,
    padding:10,
    justifyContent:"center",
  },
  TextButton:{
    textAlign:'center',
    backgroundColor:'gray',
    color:'white',
    padding:10,
  }
})

export default About