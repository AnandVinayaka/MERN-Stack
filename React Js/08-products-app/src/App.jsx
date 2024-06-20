import { PRODUCTS } from "./data";
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";

function App(){
  return(
    <>
    <Header/>

    <main>
      <Products {...PRODUCTS[0]}/>
      <br/>
      <Products {...PRODUCTS[1]}/>
      <br/>
      <Products {...PRODUCTS[2]}/>
      <br/>
      <Products {...PRODUCTS[4]}/>
    </main>
    </>
  )
}

export default App;