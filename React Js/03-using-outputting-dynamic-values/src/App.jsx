const reactDescription = ["Fundamentals", "Crucial", "Core"];
let min = 1;
let max = 3;

function getRandomInt(max){
  return Math.floor(Math.random()*max) + min -1;
}


function Header(){
  const description = reactDescription[getRandomInt(max)];

  return(
    <>
    <header>
      <h1>React Essentials</h1>
      <p>React concepts are very important and <q><strong>{description}</strong></q>  </p>
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