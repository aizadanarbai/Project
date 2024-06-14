import { useContext, useEffect } from "react";
import { postsContext } from "../../../contexts/PostsContext";
import { PostList } from "../../Home/components";
import { PostsContextProvider } from "../../../contexts/PostsContext";
const CrossView = () => {
  const {getPosts} = useContext(postsContext)
  useEffect (()=> {
    getPosts("cross");
   
  },[]);
 
  return (
    <div> <PostList/></div>
  )
  
  
};

export default CrossView;
