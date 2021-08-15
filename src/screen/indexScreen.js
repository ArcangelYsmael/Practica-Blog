import React,{useContext} from "react";
import {Text,View,StyleSheet,FlatList,Button} from "react-native";
import BlogContext from "../context/BlogContext";

const indexScreen=()=>{
    const {data,addBlogPost}=useContext(BlogContext);
    return (
        <View>
            <Button
            title="add post"
            onPress={addBlogPost}
            />
            <FlatList
                data={data}
                keyExtractor={(item)=>item.title}
                renderItem={({item})=>{
                    return <Text>{item.title}</Text> 
                }}
            />
        </View>
    )
}

export default indexScreen;