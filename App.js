import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import indexScreen from './src/screen/indexScreen';
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screen/showScreen";
import CreateScreen from "./src/screen/createScreen";
import EditScreen from "./src/screen/editScreen";


const navigator=createStackNavigator({
  index:indexScreen,
  show:ShowScreen,
  create:CreateScreen,
  edit:EditScreen,
},{
  initialRouteName:"index",
  defaultNavigationOptions:{title:"Blog"}
});

const App= createAppContainer(navigator);

export default ()=>{
   return <Provider>
            <App/>
         </Provider>
};