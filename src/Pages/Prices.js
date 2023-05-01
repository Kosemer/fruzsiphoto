import classes from "./Prices.module.css";
import Card from "../Components/UI/PriceCard";
import { useEffect } from "react";

const Prices = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {" "}
      <div className={classes.container}>
        <div className={classes.trackingInContract}>
          Az alábbiakban leírt esküvői csomagajánlatok iránymutatók.<br></br> Minden
          esküvő egyedi paraméterekkel rendelkezik. Ezért igyekszem mindig az
          igényeknek megfelelően egyedi árajánlatot adni.<br></br><br></br> Kéréseddel
          bátran keress!
        </div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Prices;
