import reactImg1 from "./assets/Benelli-TRK-502-X.jpg";
import reactImg2 from "./assets/office.png";
import reactImg3 from "./assets/nature.jpg";

const reactImages = [reactImg1, reactImg2, reactImg3]
let lengtharray = reactImages.length;

function getRandomImg(){
  return Math.floor(Math.random()*lengtharray);
}

function ComponentProperties(props){
    return(
        <>
        <h1>Heading: {props.h1} </h1>
        <p><strong>Paragraph:</strong> {props.p}</p>
        <img src={props.img} width={200} height={150}/>
        <br/>
        <button>{props.button}</button>
        </>
    )
}

function Header(){
    return(
        <>
        <h1><u>Task-1 or Assignment-1</u></h1>
        <p>let's create some nested components and practice concepts discussed</p>
        </>
    )
}

function Main(){
    const RandomImage = reactImages[getRandomImg()];
    return(
        <>
        <h2>Now let's showcase output values dynamically</h2>
        <p>Let's print a Random Image using function <strong>getRandomImg</strong></p>
        <h4>This is a random image</h4>
        <img src={RandomImage} width={200} height={150}/>

        <h4>Now let's change some components properties</h4>
        <ol>
            <li><ComponentProperties h1="First heading" p="This is a first sample para" img={reactImg1} button="Submit1"/></li>
            <li><ComponentProperties h1="Second heading" p="This is a second sample para" img={reactImg2} button="Submit2"/></li>
        </ol>
        </>
    )
}

function Footer(){
    return(
        <>
        <p>&copy; Copyright 2024 by ANAND. All rights reserved</p>
        </>
    )
}

function App(){
  return(
    <>
    <header>
        <h1>"HEADER"</h1>
        <Header/>
    </header>
    
    <main>
        <h1>"MAIN"</h1>
        <Main/>
    </main>

    <footer>
        <h1>"FOOTER"</h1>
        <Footer/>
    </footer>
    </>
  )
}

export default App;