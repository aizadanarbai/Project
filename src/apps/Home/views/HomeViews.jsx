import { useContext, useEffect } from "react";
import { postsContext } from "../../../contexts/PostsContext";
import styles from "./HomeView.module.css";
import { PostList } from "../components";
const HomeView = () => {
  const { getPosts } = useContext(postsContext);
  useEffect(() => {
   getPosts("clothes")
  }, []);
  return (
    <div className={styles.container}>
      <PostList />
    </div>
  );
};
export default HomeView;
