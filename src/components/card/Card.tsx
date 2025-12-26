import './Card.module.css';
import {type PackageType} from '../data/Data';

type CardPropType = PackageType & {
  index: number;
}

const Card = ({title, sindescription, engdescription, fee, duration, contact,  email, image, index}: CardPropType) => {
  return (
    <div className="card" key={index}>
        <span >
        <img src={image} alt={title} className="card-img"/>
        </span>
        <h3 className="card-title">{title}</h3>
        <p>Description:{sindescription} {engdescription}</p>
        <p>Duration: {duration}</p>
        <p>Fee: {fee}</p>
        <h3>Contact : </h3>
        <p>Call: {contact}</p>
        <p>Email: {email}</p>
    </div>
  );
}

export default Card;