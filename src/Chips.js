import chipsImg from "./chips.png"
import {Link} from "react-router-dom"

const Chips = () => {
    return(
        <div>
            <img src={chipsImg} alt="Bare Veggie Chips"/>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Chips