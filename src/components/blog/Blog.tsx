import {type ArticleType} from "../data/Articles.ts";
import styles from "./Blog.module.css";

type BlogType = ArticleType & {
    index: number;
}


const Blog = ({title, lead, image, body, conclusion, links, index}: BlogType) => {
  return (
    <div className={styles.blogArticle} key={index} >
      <h1>{title}</h1>
      <h3>{lead}</h3>
      <img src={image} alt={title}/>
      <p>{body}</p>
      <p>{conclusion}</p>
      <h3>Keywords: {links}</h3>
    </div>
  );
};

export default Blog;
