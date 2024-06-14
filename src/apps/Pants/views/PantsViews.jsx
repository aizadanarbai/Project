import { PostList } from "../../Home/components";
import { useContext, useEffect } from "react";
import { postsContext } from "../../../contexts/PostsContext";

const PantsView = () => {
  const {getPosts} = useContext(postsContext)
  useEffect(() => {
  getPosts("pant")
  },[])
 

  return (
    <div>
    <PostList/>
    </div>
  );
};

export default PantsView;