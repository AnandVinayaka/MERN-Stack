export default function CarsInfo ({carImage, carCompany, carModel, engine, Torque, fuel, Mileage, carPrice, onCarSelect}) {
    return (
        <li style = {{margin: "10px", padding: "10px"}} onClick = {onCarSelect}>
            <div>
                <img src = {carImage} alt = {carModel} title = {carModel} style = {{width: "350px"}} /> <br/>
                Company: {carCompany}<br />
                Variant: {carModel}<br />
                Engine: {engine}<br />
                Torque: {Torque}<br />
                Fuel: {fuel}<br />
                Mileage: {Mileage}<br />
                Price: {carPrice}
            </div>
        </li>
    );
}