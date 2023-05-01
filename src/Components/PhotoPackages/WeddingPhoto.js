import styles from "../UI/PriceCard.module.css";
import { NavLink } from "react-router-dom";
import outdoor from "../../Assets/WeddingPhotography/creativePhotography.jpg";
import outdoor2 from "../../Assets/WeddingPhotography/ceremonyPhotography.jpg";
import outdoor3 from "../../Assets/WeddingPhotography/creativePhotography.jpg";
import outdoor4 from "../../Assets/WeddingPhotography/silverWedding.jpg";
import outdoor5 from "../../Assets/WeddingPhotography/goldWedding.jpg";
import outdoor6 from "../../Assets/WeddingPhotography/diamondWedding.jpg";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const prices = [
  {
    img: outdoor,
    title: "Kreatív fotózás",
    value: "Esküvői fotózás - Kreatív - 60.000 Ft",
    titleClass: "standard",
    duration: "1-2 óra fotózás",
    description: ["Kreatív - páros fotózás", "Szabadtéren vagy stúdióban","25 retusált kép digitálisan"],
    price: "50.000 Ft",
  },
  {
    img: outdoor2,
    title: "Szertartás fotózás",
    value: "Esküvői fotózás - Szertartás - 30.000 Ft",
    titleClass: "standard",
    duration: "Szertartás fotózása polgári vagy templomi",
    description: ["Csoportképek szülőkkel, barátokkal, rokonokkal", "25 retusált kép digitálisan"],
    price: "50.000 Ft",
  },
  {
    img: outdoor4,
    title: "Alap csomag",
    value: "Esküvői fotózás - Alap csomag - 30.000 Ft",
    titleClass: "silver",
    duration: "Általában 100-200 kép kerül átadásra",
    description: ["Fotók az előkészületekről (terem, smink, fodrász, készülődés)", "10 órás fotós szolgáltatás, amely tartalmazhatja a kikérőt, az egyházi és a polgári szertartást, a beállított képeket a szertartást követően vagy előtte, a vacsorát, a lakodalmat és a menyasszonytáncot"],
    price: "30.000 Ft",
  },
  {
    img: outdoor5,
    title: "Normál csomag",
    value: "Esküvői fotózás - Normál csomag - 35.000 Ft",
    titleClass: "gold",
    duration: "15 órás fotós szolgáltatás",
    description: ["Amely tartalmazhatja a kikérőt, az egyházi és a polgári szertartást, a beállított képeket a szertartást követően vagy előtte, a vacsorát, a lakodalmat és a menyasszonytáncot.", "Fotók az előkészületekről (terem, smink, fodrász, készülődés). 15 órás fotós szolgáltatás"],
    price: "35.000 Ft",
  },
  {
    img: outdoor6,
    title: "Prémium csomag",
    value: "Esküvői fotózás - Prémium csomag - 40.000 Ft",
    titleClass: "diamond",
    duration: "Korlátlan fotózási idő",
    description: ["Amely tartalmazhatja a kikérőt, az egyházi és a polgári szertartást, a beállított képeket a szertartást követően vagy előtte, a vacsorát, a lakodalmat és a menyasszonytáncot a buli végéig", "Fotók az előkészületekről (terem, smink, fodrász, készülődés)", "Kreatív fotózás másik napon is lehetséges", "Ajándék jegyes fotózás"],
    price: "40.000 Ft",
  },
];

const OutdoorCard = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const photoPackageValue = (value) => {
    cartCtx.setphotoPackage(value);
    navigate('/kapcsolat', { state: { value: value } });
  };


  return (
    <div>
      <h1 className={styles.title}>Esküvői fotózás</h1>
      <hr  className={styles.underline}/>
      <div className={styles.box}>
        <section className={styles.articles}>
          {prices.map((price, index) => (
            
            <article key={index} onClick={() => photoPackageValue(price.value)}>
              
              <div className={styles["article-wrapper"]}>
                
                <figure>
                  <img src={price.img} alt={price.title} />
                </figure>
                <div className={styles["article-body"]}>
                  <h2 className={styles[price.titleClass.toLowerCase()]}>
                    {price.title}
                  </h2>
                  <ul>
                    <li>{price.duration}</li>
                    {price.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  <h3 className={styles.price}>Ár: {price.price}</h3>
                  
                  <NavLink
                    className={styles["read-more"]}
                  >
                    Időpont kérés{" "}
                    <span className={styles["sr-only"]}>
                      about this is some title
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.icon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OutdoorCard;
