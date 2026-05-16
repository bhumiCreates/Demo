/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, StyleSheet, View ,Image,TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import {useState} from 'react'

const dummy =[
  {id:1, User:"Raghav Jain" , image:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:2, User:"Leah", image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:3, User:"Pearl",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:4, User:"Michael" ,image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  {id:5,User:"Nick", image:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]

const App = () => {

  const [searchUser, setsearchUser] = useState('')

  return(
    <SafeAreaView style={styles.container}>
       <TextInput
          placeholder="Search usernames..."
          style={styles.input}
          value={searchUser}
          onChangeText={(searchUser)=>setsearchUser(searchUser)}
       />
       <Button>Search</Button>
      <FlatList 
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image 
              source={{
                uri: item.image
              }}
              style={{width:60,height:60,borderRadius:200}}
            />

            <View style={styles.text}>
              <Text style={styles.user}>{item.User}</Text>
              <Text style={styles.suggest}>Suggested for you</Text>
            </View>

            <TouchableOpacity style={styles.follow}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
    

      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      numColumns={2}
      columnWrapperStyle={{ gap:20 }}
      // horizontal
      />
      <Text>Result:{searchUser}</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
    backgroundColor:"#212121"
  },
  card:{
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"black",
    height:200,
    width:180
  },
  text:{
    color:"white",
    fontWeight:"bold",
    alignItems:"center"
  },
  user:{
    color:"white",
  },
  suggest:{
    color:"#968888"
  },

  follow:{
    marginTop:20,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"blue",
    height:30,
    width:150,
  },

  buttonText:{
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  },

  input:{
    borderColor:"#676767",
    borderWidth:1,
    borderRadius:8,
    width:"100%",
    height:40,
    backgroundColor: "#3a3a3a",
    padding:10,
    margin:10,
    alignSelf:"center",
  }
})
