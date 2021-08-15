import createDataContext from "./createDataContext";

const blogReducer=(state,action)=>{
  switch(action.type){
    case "add_blogPost":
      return [...state,{id:Math.floor(Math.random()*999999) ,title:`blogPost #${state.length+1}`}]
    case "deleteBlogPost":
      return state.filter((blogPost)=>blogPost.id!==action.payload);
    default :
      return state;  
  }

}
const addBlogPost=dispatch=>{
    return()=>dispatch({type:"add_blogPost"});
  }

const deleteBlogPost=dispatch=>{
    return(id)=>dispatch({type:"deleteBlogPost",payload:id});
  }

  
  
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[]);