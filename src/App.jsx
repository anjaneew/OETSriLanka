import './App.css'
import Product from './components/products/Product.jsx';
import packages from './db/data.jsx';
import Card from './components/Card.jsx';

function App() {

  const filteredData = (packages) => {

    let filteredProducts = packages;
    //missing logic here
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
      <Product result={result}/>
    </>
  );
}

export default App;
