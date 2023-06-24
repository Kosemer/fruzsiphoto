/* Az komponens fotózási csomagokat jelenít meg, amelyek a prices tömbben vannak definiálva. Mindegyik csomag egy cikkben (article) jelenik meg, amely tartalmazza a csomag képét, címét, időtartamát, leírását és árát.

Minden cikkben található egy link (NavLink), amelyben egy photoPackageValue függvény hívódik meg, amikor a felhasználó a cikkre kattint. Ez a függvény beállítja a csomag értékét a CartContext-ben és átirányítja a felhasználót a /kapcsolat oldalra, az aktuális csomag értékét a navigációs állapotban továbbítva. */

import styles from "./PriceCard.module.css";
import { NavLink } from "react-router-dom";
import outdoor from "../../Assets/WeddingPhotography/creativePhotography.jpg";
import outdoor2 from "../../Assets/WeddingPhotography/ceremonyPhotography.jpg";
import outdoor4 from "../../Assets/WeddingPhotography/silverWedding.jpg";
import outdoor5 from "../../Assets/WeddingPhotography/goldWedding.jpg";
import outdoor6 from "../../Assets/WeddingPhotography/diamondWedding.jpg";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const prices = [
  {
    img: outdoor,
    title: "Kreatív fotózás",
    value: "Esküvői fotózás - Kreatív - 60.000 Ft",
    titleClass: "standard",
    duration: "1-2 óra fotózás",
    description: [
      "Kreatív - páros fotózás",
      "Szabadtéren vagy stúdióban",
      "25 retusált kép digitálisan",
      "A megadott árak Budapest és 50 km-es vonzáskörzetében érvényesek, további árak megbeszélés szerint.",
    ],
    price: "50.000 Ft",
  },
  {
    img: outdoor2,
    title: "Szertartás fotózás",
    value: "Esküvői fotózás - Szertartás - 30.000 Ft",
    titleClass: "standard",
    duration: "Szertartás fotózása polgári vagy templomi",
    description: [
      "Csoportképek szülőkkel, barátokkal, rokonokkal",
      "25 retusált kép digitálisan",
      "A megadott árak Budapest és 50 km-es vonzáskörzetében érvényesek, további árak megbeszélés szerint.",
    ],
    price: "50.000 Ft",
  },
  {
    img: outdoor6,
    title: "Esküvői csomag",
    value: "Esküvői fotózás - Esküvői csomag - 50.000 Ft-tól",
    titleClass: "diamond",
    onDemand: "Igény szerint:",
    duration: "Időtartam",
    description: [
      "Tartalmazhat előkészületet, kikérőt, egyházi és/vagy polgári szertartást, a beállított képeket a szertartást követően vagy előtte, vacsorát, a lakodalmat és a menyasszonytáncot a rendezvény végéig.",
      "Átadott kép 25 db-tól",
      "A megadott árak Budapest és 50 km-es vonzáskörzetében érvényesek, további árak megbeszélés szerint.",
    ],
    price: "50.000 Ft-tól",
  },
];

const OutdoorCard = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const photoPackageValue = (value) => {
    cartCtx.setphotoPackage(value);
    navigate("/kapcsolat", { state: { value: value } });
  };

  return (
    <div>
      <h1 className={styles.title}>Esküvői fotózás</h1>
      <hr className={styles.underline} />
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
                  <p className={styles.onDemand}>{price.onDemand}</p>
                  <ul>
                    <li>{price.duration}</li>
                    {price.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  <h3 className={styles.price}>Ár: {price.price}</h3>

                  <NavLink className={styles["read-more"]}>
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
