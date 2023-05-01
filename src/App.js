import Header from "./Components/Layout/Header";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/ContactForm/Contact";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Prices from "./Pages/Prices";
import Photography from "./Pages/Photography";
import CartProvider from "./Components/Store/CartProvider";
import Footer from "./Components/Layout/Footer";
import ContactForm from "./Components/ContactForm/ContactFrom";
import ScrollToTopButton from "./Components/UI/ScrollToTopButton";
import Test from "./Test";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/galeria" element={<Photography></Photography>}></Route>
          <Route path="/arak" element={<Prices></Prices>}></Route>
          <Route path="/rolam" element={<AboutMe></AboutMe>}></Route>
          <Route
            path="/kapcsolat"
            element={<ContactForm></ContactForm>}
          ></Route>
        </Routes>
        <Test></Test>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
      </div>
    </CartProvider>
  );
}

export default App;
