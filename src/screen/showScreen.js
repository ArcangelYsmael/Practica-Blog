import React,{useContext} from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
    const {state}=useContext(Context);
    const blogPost=state.find((post)=>post.id===navigation.getParam("id"));
    return <View>
            <Text> {blogPost.title}</Text>
            <Text> {blogPost.content}</Text>
    </View>
}

const style=StyleSheet.create({

});
ShowScreen.navigationOptions=({navigation})=>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('edit',{id:navigation.getParam("id")})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}
export default ShowScreen;