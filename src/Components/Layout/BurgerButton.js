import { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../Store/cart-context";
import "./BurgerButton.css";

function BurgerButton(props) {

const cartCtx = useContext(CartContext);



  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  //const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    updateMenu();
 }, [cartCtx.cssMobile]);
  

  // toggle burger menu change
  const updateMenu = () => {
    if (!cartCtx.cssMobile) {
      setBurgerClass("burger-bar clicked");
      //setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      //setMenuClass("menu hidden");
    }
    setIsMenuClicked(isMenuClicked);
   // props.moblieMenuChange();
  };

  const menuChange = () => {
    props.moblieMenuChange();
  }


  return (
    <Fragment>
      <div className="burger-menu" onClick={menuChange}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
    </Fragment>
  );
}

export default BurgerButton;
