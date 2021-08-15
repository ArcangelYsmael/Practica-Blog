import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import indexScreen from './src/screen/indexScreen';
import { BlogProvider } from "./src/context/BlogContext";

const navigator=createStackNavigator({
  index:indexScreen
},{
  initialRouteName:"index",
  defaultNavigationOptions:{title:"Blog"}
});

const App= createAppContainer(navigator);

export default ()=>{
   return <BlogProvider>
            <App/>
         </BlogProvider>
};