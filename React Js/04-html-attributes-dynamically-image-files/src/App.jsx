import reactImg1 from "./assets/Benelli-TRK-502-X.jpg";
import reactImg2 from "./assets/office.png";
import reactImg3 from "./assets/nature.jpg";

const reactDescription = ["Fundamentals", "Crucial", "Core"];
const reactImages = [reactImg1, reactImg2, reactImg3]

let min = 1;
let max = 3;


function getRandomInt(){
  return Math.floor(Math.random()*max) + min -1;
}

function getRandomImg(){
  return Math.floor(Math.random()*max) + min -1;
}

function Header(){
  const description = reactDescription[getRandomInt()];
  const images = reactImages[getRandomImg()];

  return(
    <>
    <header>
      <h1>React Essentials</h1>
      <img src={images} alt="images" title="images" width="200px" height="100px"/>
      <p>React concepts are very important and <q><strong>{description}</strong></q>.</p>
    </header>
    </>
  )
}


function App(){
  return(
    <>
    <Header/>

    <main>
      <h1>Time to discuss about outputting dynamic values</h1>
    </main>
    </>
  )
}

export default App;