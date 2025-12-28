
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

  const welcomeScreen = 
  
  <div className="home-intro">
    <h1>Welcome to OET Sri Lanka</h1>
    <p>OET Sri Lanka is your trusted education provider for Occupational English Test preparation. We specialize in helping healthcare professionals achieve their language proficiency goals through targeted, profession-specific training programs.</p>
    <p>The Occupational English Test (OET) is recognized globally by healthcare boards and councils as proof of English language proficiency for doctors, nurses, and other healthcare professionals. Unlike general English tests, OET focuses on real healthcare scenarios you'll encounter in your daily practice, making it the most relevant assessment for your professional needs.</p>
    <p>Our experienced instructors provide comprehensive preparation across all four language skills: Listening, Reading, Writing, and Speaking. Each course is designed with practical, healthcare-focused content that mirrors actual clinical communication. Whether you're preparing for hospital consultations, patient interactions, or medical documentation, our tailored seminars equip you with the skills and confidence needed to excel.</p>
    <p>We offer flexible learning options including individual feedback sessions, skill-specific seminars, and writing correction services. Our packages are designed to address the unique challenges of each OET sub-test, with special attention to time management, vocabulary building, and exam strategies.</p>
    <p>Browse our packages or use the search function to find the specific course that matches your preparation needs. Join hundreds of successful healthcare professionals who have achieved their OET goals with our guidance.</p>
    <img src={cover} className="cover"></img>
  </div>

  return (
    <div>
      <h1>Occupational English Test</h1>
      <div className="search-form">
        <input value={query} onChange={handleInputChange} placeholder="Enter the query"/>
      <button type="submit" onClick={filterPackages}>Submit</button>
      </div>
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
      ) :  welcomeScreen }
    </div>
  );
};

export default Home;
