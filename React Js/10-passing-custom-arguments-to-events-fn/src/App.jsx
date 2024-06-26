import { GROCERY_INFO } from "./data.js";
import Header from "./components/Header/Header.jsx";
import GroceryInfo from "./components/GroceryInfo/GroceryInfo.jsx";

import './components/Header/Header.css';
import './components/GroceryInfo/GroceryInfo.css'

function App() {
  function handleSelect(selectedData) {
    console.log(`You've clicked the GroceryInfo: ${selectedData.GroceryId}`);
    console.log(selectedData);
  }

  return (
    <>
      <Header />

      <main>
        <section id="section-1">
          <GroceryInfo {...GROCERY_INFO[0]} onSelect = {() => handleSelect({...GROCERY_INFO[0]})} />

          <GroceryInfo {...GROCERY_INFO[1]} onSelect = {() => handleSelect({...GROCERY_INFO[1]})} />

          <GroceryInfo {...GROCERY_INFO[2]} onSelect = {() => handleSelect({...GROCERY_INFO[2]})} >
            GROCERY 3
          </GroceryInfo>

          <GroceryInfo {...GROCERY_INFO[3]} onSelect = {() => handleSelect({...GROCERY_INFO[3]})}/>

        </section>
      </main>
    </>
  )
}

export default App;