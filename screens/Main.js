import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Main = () => {
    const navigation = useNavigation()

  return (
    <>
    <StatusBar/>
    <View clas>
      <Text  style={styles.header}>React Native Navigation</Text>
      <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate("home")}><Text style={styles.text}>Home</Text></TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate("about")}><Text style={styles.text}>About</Text></TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate("contact")}><Text style={styles.text}>Contact</Text></TouchableOpacity>
    </View>

      </>
  )
}

const styles = StyleSheet.create({
    header:{
      fontSize:35,
      textAlign:'center',
    },
    menuItem:{
        margin:15,
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        fontSize: 30,
        fontWeight: 'bold',

    },
    text:{
      textAlign:"center",
    }
})
export default Main