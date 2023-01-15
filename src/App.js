import "./scss/app.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("https://my.api.mockaroo.com/pizzas.json?key=5fcbe6c0")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPizzas(data);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
