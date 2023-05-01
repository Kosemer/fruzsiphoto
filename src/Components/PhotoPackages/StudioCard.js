import styles from "../UI/PriceCard.module.css";
import { NavLink } from "react-router-dom";
import outdoor from "../../Assets/StudioPhotography/studio.jpg";
import outdoor2 from "../../Assets/StudioPhotography/studio2.jpg";
import outdoor3 from "../../Assets/StudioPhotography/studio3.jpg";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const prices = [
  {
    img: outdoor2,
    title: "Alap csomag",
    value: "Stúdió fotózás - Alap csomag - 40.000 Ft",
    titleClass: "bronze",
    duration: "2 óra fotózás",
    description: ["10 retusált kép digitálisan", "További képek: 1.000 Ft/db", "Az ár tartalmazza a stúdió bérlési árát is"],
    price: "40.000 Ft",
  },
  {
    img: outdoor3,
    title: "Normál csomag",
    value: "Stúdió fotózás - Normál csomag - 50.000 Ft",
    titleClass: "silver",
    duration: "2 óra fotózás",
    description: ["15 retusált kép digitálisan", "További képek: 1.000 Ft/db", "Az ár tartalmazza a stúdió bérlési árát is"],
    price: "50.000 Ft",
  },
  {
    img: outdoor,
    title: "Prémium csomag",
    value: "Stúdió fotózás - Prémium csomag - 55.000 Ft",
    titleClass: "gold",
    duration: "3 óra fotózás",
    description: ["20 retusált kép digitálisan", "További képek: 1.000 Ft/db", "Az ár tartalmazza a stúdió bérlési árát is"],
    price: "55.000 Ft",
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
      <h1 className={styles.title}>Stúdió fotózás</h1>
      <hr className={styles.underline} />
      <div className={styles.box}>
        <section className={styles.articles}>
          {prices.map((price, index) => (
              <article
                key={index}
                onClick={() => photoPackageValue(price.value)}
              >
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
