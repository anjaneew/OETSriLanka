import {type ArticleType} from "../data/Articles.ts";

type BlogType = ArticleType & {
    index: number;
}


const Blog = ({title, lead, image, body, conclusion, links, index}: BlogType) => {
  return (
    <div className="blogArticle" key={index} >
      <h1>{title}</h1>
      <p>{lead}</p>
      <img src={image} alt={title}/>
      <p>{body}</p>
      <p>{conclusion}</p>
      <p>Keywords: {links}</p>
    </div>
  );
};

export default Blog;
