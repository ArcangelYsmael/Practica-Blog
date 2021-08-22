import React,{useContext} from "react";
import {Text,View,StyleSheet,FlatList,Button,TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import { EvilIcons,Feather } from '@expo/vector-icons';

const indexScreen=({navigation})=>{
    const {state,addBlogPost,deleteBlogPost}=useContext(Context);
    return (
        <View> 
                <FlatList
                    data={state}
                    keyExtractor={(item)=>item.title}
                    renderItem={({item})=>{
                        return <TouchableOpacity onPress={()=>{
                            navigation.navigate("show",{id:item.id});
                        }}>
                            <View style={style.postContainer}>
                                <Text style={style.title}>{item.title}</Text>
                                <TouchableOpacity onPress={()=>{
                                        console.log(item.id);
                                        deleteBlogPost(item.id);
                                }}>
                                    <EvilIcons name="trash" color="black" style={style.icon}/>
                                </TouchableOpacity>
                            </View> 
                            </TouchableOpacity>
                    }}
                />          
        </View>
    );
};
indexScreen.navigationOptions=({navigation})=>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
}

const style=StyleSheet.create({
    postContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5,
        borderColor:"ligthGray",
        borderTopWidth:1,
        paddingHorizontal:10
    },
    title:{
        fontSize:18,
    },
    icon:{
        fontSize:24,
    }
});

export default indexScreen;