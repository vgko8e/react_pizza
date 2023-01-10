import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">All pizzas</h2>
          <div class="content__items">
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
