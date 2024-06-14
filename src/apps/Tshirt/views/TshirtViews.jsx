import { useContext, useEffect } from "react";
import { postsContext } from "../../../contexts/PostsContext";
import { PostList } from "../../Home/components";
const TShirtView = () => {
  const {getPosts} = useContext(postsContext)
 useEffect(() => {
   getPosts("tshirt")
 },[])
  return (
    <div>
     <PostList/>
    </div>
  );
};

export default TShirtView;