import styles from './Card.module.css';
import {type PackageType} from '../data/Data';

type CardPropType = PackageType & {
  index: number;
}

const Card = ({title, sindescription, engdescription, fee, duration, contact,  email, image, index}: CardPropType) => {
  return (
    <div className={styles.card} key={index}>
        <span >
        <img src={image} alt={title} className={styles.cardImg}/>
        </span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <h3 className={styles.subTitle}>Description:</h3>
        <p>{sindescription}</p>
        <p>{engdescription}</p>
        <p>Duration: {duration}</p>
        <p>Fee: {fee}</p>
        <h3  className={styles.subTitle}>Contact : </h3>
        <p>Call: {contact}</p>
        <p>Email: {email}</p>
    </div>
  );
}

export default Card;