import classes from "./AboutMe.module.css";
import { useEffect } from "react";
import me from "../Assets/Me.jpg";

function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Dobák Fruzsina vagyok</h1>
      <div className={classes.content}>
        
        <p className={classes.text}>
          Gyerekkorom óta szeretek fotózni, így nem is csoda, hogy ezt a szakmát
          választottam. <br></br>
          <br></br>Az első saját gépem, egy tükörreflexes (DSLR) Nikon D750
          volt, amit az okj képzés előtt vettem néhány hónappal, illetve mai
          napig is azt használom. Már a képzés alatt részese lehettem esküvők,
          portrék, család illetve sportfotózásokra. <br></br>
          <br></br>Gyermek portrék készítésekor, magam is újra gyerekké válok.
          Az esküvők közel állnak a szívemhez! Megtisztelő részese lenni az
          ijfú, szerelmes pár meghitt és boldog pillanatainak. Ezeket az
          érzéseket szeretném megörökíteni a számukra, hogy ha később
          visszanézik a képeket eszükbe jusson, hogy akkor ott mennyire fontosok
          voltak és lesznek még sokáig egymásnak.
        </p>
        <img src={me} alt="Dobák Fruzsina" className={classes.image} />
      </div>
      <h2 className={classes.subheader}>Mit fotózom?</h2>
      <p className={classes.text}>
        Sok területen kipróbáltam magam, de ami igazán közel áll hozzám és
        amiben felkéréseket vállalok azok a következők: kreatív családi- és
        portréfotózás, rendezvényfotózás (sport, esküvő), Boudoir. <br></br>
        <br></br>Szeretettel várok mindenkit!
      </p>
    </div>
  );
}

export default AboutMe;
