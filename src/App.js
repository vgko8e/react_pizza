import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
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
            <PizzaBlock title="Four cheese" price={12} />
            <PizzaBlock title="Mexican" price={10} />
            <PizzaBlock title="BBQ" price={14} />
            <PizzaBlock title="Red solmon" price={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
