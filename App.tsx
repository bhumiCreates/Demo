import { StyleSheet, View ,Image,TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image 
        source={{uri:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        style={{width:150,height:150,borderRadius:200}}
        />
        <View style={styles.text}>
          <Text style={styles.user}>Username</Text>
          <Text style={styles.id}>Instagram id</Text>
          <Text style={styles.fb}>Followed by</Text>
        </View>
        <TouchableOpacity style={styles.follow}>
          <Text>Follow</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#212121"
  },
  card:{
    backgroundColor:"black",
    height:250,
    width:200
  },
  text:{
    fontWeight:"bold"
  },
  user:{
    color:"white"
  },
  fb:{
    color:"#968888"
  },
  id:{
    color:"#decece"
  },

  follow:{
    backgroundColor:"blue"
  }
})
