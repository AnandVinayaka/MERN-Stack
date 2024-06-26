import { useState } from "react";

import { CARS_INFO, DEALERS_DATA } from "./data";

import Header from "./components/Header";
import CarsInfo from "./components/CarsInfo";
import DealersData from "./components/DealersData";

function App() {

  const [selectedCar, setSelectedCar] = useState(0);
  const [selectedDealer, setSelectedDealer] = useState();

  function handleCarSelect (selectedCar) {
    // console.log(selectedCar);
    setSelectedCar(selectedCar);
  }


  function handleSelectedDealer (selectedDealer) {
    // console.log(selectedDealer);
    setSelectedDealer(selectedDealer);
  }



  let dealerContent = '';

  if (selectedDealer) {
    dealerContent = (
      <div id="dealer-content">
        <ul>
        <li><h3>{DEALERS_DATA[selectedDealer].fullName}</h3></li>
        <li><h4>{DEALERS_DATA[selectedDealer].emailAddress}</h4></li>
        <li><h4>{DEALERS_DATA[selectedDealer].mobileNumber}</h4></li>
        </ul>
      </div>
    );
  } else {
    dealerContent = <p>please choose any dealer</p>
  }
  
  return (
    <div>
      <Header />

      <main>
        <section id="cars-info">
          <h2>Top #10 Trending CARS</h2>
          
          <ul>
            {CARS_INFO.map((carItem) => (
              <CarsInfo key = {carItem.carImage} {...carItem} onCarSelect = {() => handleCarSelect(carItem.carImage)} />
            ))}
          </ul>
        </section>


        <section id="cars-info-clicked">
        {CARS_INFO.map((carItem) => (
          selectedCar === carItem.carImage ? (<CarsInfo {...carItem} />) : undefined
            ))} 
        </section>

        <section id="dealers-data">
          <h2>Dealers</h2>
          <ul>
            <DealersData onSelectDealer = {() => handleSelectedDealer("jeep")}>{DEALERS_DATA["jeep"].fullName}</DealersData>
            <DealersData onSelectDealer = {() => handleSelectedDealer("mahindra")}>{DEALERS_DATA["mahindra"].fullName}</DealersData>
            <DealersData onSelectDealer = {() => handleSelectedDealer("mg")}>{DEALERS_DATA["mg"].fullName}</DealersData>
            <DealersData onSelectDealer = {() => handleSelectedDealer("tata")}>{DEALERS_DATA["tata"].fullName}</DealersData>
            <DealersData onSelectDealer = {() => handleSelectedDealer("toyota")}>{DEALERS_DATA["toyota"].fullName}</DealersData>
            <DealersData onSelectDealer = {() => handleSelectedDealer("maruti")}>{DEALERS_DATA["maruti"].fullName}</DealersData>
            <DealersData onSelectDealer = {() => handleSelectedDealer("skoda")}>{DEALERS_DATA["skoda"].fullName}</DealersData>
            <DealersData onSelectDealer = {() => handleSelectedDealer("hyundai")}>{DEALERS_DATA["hyundai"].fullName}</DealersData>
          </ul>
        </section>

        
        {dealerContent}


      </main>
    </div>
  );
}

export default App;