import "./scss/app.scss";
import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const AppContext = createContext();

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchInput, setSearchInput }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
