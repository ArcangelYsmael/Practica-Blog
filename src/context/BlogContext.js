import createDataContext from "./createDataContext";

const blogReducer=(state,action)=>{
  switch(action.type){
    case "add_blogPost":
      return [...state,{id:Math.floor(Math.random()*999999) ,title:action.payload.title,content:action.payload.content}]
    case "deleteBlogPost":
      return state.filter((blogPost)=>blogPost.id!==action.payload);
    default :
      return state;  
  }

}
const addBlogPost=dispatch=>{
    return(title,content)=>dispatch({type:"add_blogPost",payload:{title,content}});
  }

const deleteBlogPost=dispatch=>{
    return(id)=>dispatch({type:"deleteBlogPost",payload:id});
  }

  
  
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[]);