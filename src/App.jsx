import { useState } from 'react';

import './App.css'
import Product from './components/products/Product.jsx';
import packages from './db/data.jsx';
import Card from './components/Card.jsx';
import Nav from './components/navigation/Nav.jsx';

function App() {

  // const [selectedCategory, setSelectedCategory] = useState(null); //ignore this for now. 

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);

  const filteredItems = packages.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));

  const filteredData = (packages) => {

    let filteredProducts = packages;
    //missing logic here

    //Filter input items
    if(query){
      filteredProducts = filteredItems;
    }


    return filteredProducts.map(({img, title, duration, fee, profession, skill, description}, index) => (
      <Card 
        key={index}
        img={img}
        title={title}
        duration={duration}
        fee = {fee}
        profession = {profession}
        skill = {skill}
        description = {description}
      />
    ));
  }

  const result = filteredData(packages);

  return (
    <>
      <h1>OET Sri Lanka</h1>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Product result={result}/>
      
    </>
  );
}

export default App;
