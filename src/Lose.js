import { ReactComponent as IconMenu1 } from './logo.svg'
import { ReactComponent as IconMenu2 } from './qm.svg'
import { Link } from "react-router-dom";


const Lose =() =>{
    return(<div>
        <div className ="h3">You <br/> Lose :(</div>
        <div id ="la">Better luck next<br/> time...</div>
        <IconMenu2 className = "qm"/> <IconMenu1 className = "logo"/>
        <Link to="/Enterword">
        <button className ="button">
          Play Again!
          </button>
          </Link>
    </div>);
}
export default Lose;