import chocolateImg from "./chocolate.png"
import {Link} from "react-router-dom"


const Chocolate = () => {
    return(
        <div>
            <img src={chocolateImg} alt="HU Vegan Chocolate"/>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Chocolate