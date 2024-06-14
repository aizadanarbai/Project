import { useContext } from "react";
import { PostItem } from "../PostItem";

import { postsContext } from "../../../../contexts/PostsContext";

const PostList = () => {
  const { posts } = useContext(postsContext);
  return (
    <ul className={StyleSheet.postlist}>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </ul>
  );
};
export default PostList;
