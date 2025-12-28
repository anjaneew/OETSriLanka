import {type ArticleType} from "../data/Articles.ts";
import "./Blog.module.css";

type BlogType = ArticleType & {
    index: number;
}


const Blog = ({title, lead, image, body, conclusion, links, index}: BlogType) => {
  return (
    <div className="blogArticle" key={index} >
      <h1 className="blog-title">{title}</h1>
      <h3>{lead}</h3>
      <img src={image} alt={title}/>
      <p>{body}</p>
      <p>{conclusion}</p>
      <p>Keywords: {links}</p>
    </div>
  );
};

export default Blog;
