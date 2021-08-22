import React, {useState,useContext} from "react";
import {View,Text,StyleSheet,TextInput,Button} from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen =({navigation})=>{
    const {state,addBlogPost}=useContext(Context);
    const blogPost=state.find((post)=>post.id===navigation.getParam("id"));
    const [title,setTitle]=useState(blogPost.title);
   const [content,setContent]=useState(blogPost.content);

   

   

    return(
     <View>
            <Text style={style.label}>Title:</Text>
            <TextInput
                value={title}
                style={style.input}
                onChangeText={(text)=>setTitle(text)}
            />
            <Text style={style.label}>Content:</Text>
            <TextInput
                value={content}
                style={style.input}
                onChangeText={(text)=>setContent(text)}
            />
        <Button
                title="Edit Blog"
                onPress={()=>{
                    addBlogPost(title,content);
                    navigation.goBack();
                }}
        />
    </View> )
};

const style=StyleSheet.create({
    label:{
        fontSize:18,
        marginTop:3,
        marginHorizontal:10,
    },
    input:{
        borderWidth:1,
        borderColor:"gray",
        borderRadius:5,
        marginTop:3,
        marginBottom:5,
        marginHorizontal:10,
    }
});

export default EditScreen;
