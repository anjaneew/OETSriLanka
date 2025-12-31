import { type PackageType, Data } from "../data/Data";
import styles from "./OetPackage.module.css";

const Packages = () => {
  return (
    <div className={styles.container}>

    {Data.map((oetPackage: PackageType, index:number) => (
        <div className={styles.card} key={index}>
        <h1 className={styles.cardTitle}>{oetPackage.title}</h1>
        <img src={oetPackage.image} alt={oetPackage.title} className={styles.cardImage}/>
        <p>{oetPackage.sindescription}</p>
        <p>{oetPackage.engdescription}</p>
        <p className={styles.cardFee}>Fee: {oetPackage.fee}</p>
        <p>Duration: {oetPackage.duration}</p>
        <p>📞 Call us at : {oetPackage.contact}</p>
        <p>✉️ Contact : {oetPackage.email}</p>
      </div>
    ))}
  </div>
  );
};

export default Packages;