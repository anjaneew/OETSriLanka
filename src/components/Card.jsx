import './Card.css';

const Card = ({img, title, duration, fee, profession, skill, description, index}) => {
  return (
    <div className="card">
        <span>
        <img src={img} alt={title} index={index} className="card-img"/>
        </span>
        <h3 className="card-title">{title}</h3>
        <p>Duration: {duration}</p>
        <p>Fee: {fee}</p>
        <p>Profession:{profession}</p>
        <p>Skill: {skill}</p>
        <p>Details: {description}</p>
    </div>
  );
}

export default Card;