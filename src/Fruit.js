import fruitImg from "./fruit.png"
import {Link} from "react-router-dom"


const Fruit = () => {
    return(
        <div>
            <img src={fruitImg} alt="Bear Fruit Rolls"/>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Fruit