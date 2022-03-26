import "./App.css";
import "./sass/main.css";
import "./sass/main.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Routering from "./Routering";
import { createContext, useState } from "react";
export const shoppingCart = createContext();
function App() {
  const [cart, setcart] = useState([]);

  return (
    <div className='App'>
      <shoppingCart.Provider value={{ cart: cart, addcart: setcart }}>
       <Routering/>
      </shoppingCart.Provider>
    </div>
  );
}

export default App;
