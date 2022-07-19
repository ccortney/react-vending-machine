import './VendingMachine.css'
import machineImg from "./vendingmachine.jpg"
import {Link} from "react-router-dom"

const VendingMachine = () => {
    return(
        <div className="VendingMachine">
            <img src={machineImg} className="VendingMachine-Image" alt="vending machine"/>
            <Link to="fruit">Button 1</Link>
            <Link to="chocolate">Button 2</Link>
            <Link to="chips">Button 3</Link>
        </div>
    )
}

export default VendingMachine
