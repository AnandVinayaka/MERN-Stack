import { STUDENTS_DATA } from "./data";
import Header from "./components/Header.jsx";
import Students from "./components/Students.jsx";

function App(){
  return(
    <>
    <Header/>

    <main>
      <ul>
        <Students {...STUDENTS_DATA[0]}/>
        <br/>
        <Students {...STUDENTS_DATA[1]}/>
        <br/>
        <Students {...STUDENTS_DATA[2]}/>
        <br/>
        <Students {...STUDENTS_DATA[3]}/>
      </ul>
    </main>
    </>
  )
}

export default App;