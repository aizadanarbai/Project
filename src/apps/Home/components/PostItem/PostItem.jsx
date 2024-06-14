import styles from "./PostItem.module.css";
import { Button } from "../../../../components";

const PostItem = ({ post }) => {
  return (
    <div className={styles.container}>
   <div className={styles.box}>
      < li className={styles.postitem}>
      <img src={post.img} />
        <p>{post.body}</p>
      <Button variant="contained">Купить</Button>
    </li></div> 
  </div>
  );
};

export default PostItem;
