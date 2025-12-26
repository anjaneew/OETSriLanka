import { useEffect, useState } from 'react';
import Blog from "../blog/Blog";
import {type ArticleType, Articles} from "../data/Articles";

const Writing = () => {

  const [selectedArticles, setSelectedArticles] = useState<ArticleType[] | null>(null);

  useEffect(()=> {
    const filteredArticles = Articles.filter((article: ArticleType)=> article.links.toLowerCase().includes("reading"));
    setSelectedArticles(filteredArticles);
  }, []);

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
        ) : <p>Writing</p>}
    </div>
  );
};

export default Writing;