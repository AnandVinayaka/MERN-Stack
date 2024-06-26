import { GROCERY_INFO } from "./data.js";
import Header from "./components/Header/Header.jsx";
import GroceryInfo from "./components/GroceryInfo/GroceryInfo.jsx";

import './components/Header/Header.css';
import './components/GroceryInfo/GroceryInfo.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="section-1">
          <GroceryInfo {...GROCERY_INFO[0]}>
            CHOCOLATES
          </GroceryInfo>

          <GroceryInfo {...GROCERY_INFO[1]}/>

          <GroceryInfo {...GROCERY_INFO[2]} >
            MILLETS
          </GroceryInfo>

          <GroceryInfo {...GROCERY_INFO[3]}/>

        </section>
      </main>
    </>
  )
}

export default App;