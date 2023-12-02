import React, { useState } from "react";
import Nav from "./comp/nav";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout";
import Footer from "./comp/footer";
import Homeproduct from "./comp/home_product";
const App = () => {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState("");
  const Filter = (x) => {
    const cateFilter = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(cateFilter);
  };
  const allCateFilter = () => {
    setShop(Homeproduct);
  };
  const searchLength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchLength) {
      alert("Please Search Something !");
      setShop(Homeproduct);
    } else {
      const searchFilter = Homeproduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchFilter);
    }
  };
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is alleardy added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added To Cart");
    }
  };
  // console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
        <Rout
          setCart={setCart}
          cart={cart}
          shop={shop}
          Filter={Filter}
          allCateFilter={allCateFilter}
          addToCart={addToCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
