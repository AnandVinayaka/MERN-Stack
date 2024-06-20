import reactImg1 from "./assets/Benelli-TRK-502-X.jpg";
import reactImg2 from "./assets/office.png";
import reactImg3 from "./assets/nature.jpg";

const reactDescription = ["Fundamentals", "Crucial", "Core"];
const reactImages = [reactImg1, reactImg2, reactImg3]
let lengtharray = reactDescription.length;

function getRandomInt(){
  return Math.floor(Math.random()*lengtharray);
}

function getRandomImg(){
  return Math.floor(Math.random()*lengtharray);
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

function ComponentProperties(props){
  return(
    <>    
    <h1>Image is {props.h1}</h1>
    <img src={props.img} width="200px" height="100px" props/>
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

    <ol>
      <h1><u>Component Properties</u></h1>
      <li><ComponentProperties h1="BENELLI BIKE" img={reactImg1}/></li>
      <li><ComponentProperties h1="NATURE" img={reactImg3}/></li>
      <li><ComponentProperties h1="OFFICE" img={reactImg2}/></li>
    </ol>
    </>
  )
}

export default App;