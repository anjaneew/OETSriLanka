
import React, {useState } from "react";
import cover from "../../public/images/Slide1.PNG";
import "../App.css";
import {Data, type PackageType} from "./data/Data";
import Card from "./card/Card";


const Home = () => {

  const [query, setQuery] = useState<string>("");
  const [searchList, setSearchList] = useState<PackageType[] | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const filterPackages = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let filteredPackages = Data.filter((product: PackageType) => product.title.toLowerCase().includes(query.toLocaleLowerCase()));
    setSearchList(filteredPackages);
  }

  return (
    <div>
      <h1>Occupational English Test</h1>
      <input value={query} onChange={handleInputChange} placeholder="Enter the query"/>
      <button type="submit" onClick={filterPackages}>Submit</button>
      <br/>
      {searchList !== null ? searchList.map(({title, sindescription, engdescription, fee, duration, contact,  email, image}, index)=>
        <Card
          key={title}
          index={index}
          title={title}
          sindescription={sindescription}
          engdescription={engdescription}
          fee={fee}
          duration={duration}
          contact={contact}
          email={email}
          image={image}
        />
      ) : <img src={cover} className="cover"></img> }
    </div>
  );
};

export default Home;
