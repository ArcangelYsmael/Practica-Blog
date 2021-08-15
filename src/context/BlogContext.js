import React,{useReducer} from "react";

const blogReducer=(state,action)=>{
  switch(action.type){
    case "add_blogPost":
      return [...state,{title:`blogPost #${state.length+1}`}]
    default :
      return state;  
  }

}

const BlogContext = React.createContext();


export const BlogProvider=({children})=>{

  const [blogPost,dispatch]=useReducer(blogReducer,[]);

  const addBlogPost=()=>{
    dispatch({type:"add_blogPost"});
  }
  

  

  return <BlogContext.Provider value={{data:blogPost,addBlogPost}}>{children} </BlogContext.Provider>   
};

export default BlogContext;