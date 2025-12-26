import { useEffect, useState } from 'react';
import Blog from "../blog/Blog";
import {type ArticleType, Articles} from "../data/Articles";

const Listening = () => {

  const [selectedArticles, setSelectedArticles] = useState<ArticleType[] | null>(null);

  useEffect(()=> {
    const filteredArticles = Articles.filter((article: ArticleType)=> article.links.toLowerCase().includes("listening"));
    setSelectedArticles(filteredArticles);
  },[]);

  return (
    <div>
        {selectedArticles !== null ? selectedArticles.map(({title, lead, image, body, conclusion, links}, index)=> 
        <Blog
          title={title}
          lead={lead}
          image={image}
          body={body}
          conclusion={conclusion}
          links={links}
          index={index}
        />
        ) : <p>Listening</p>}
    </div>
  );
};

export default Listening;
