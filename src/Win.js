import { ReactComponent as IconMenu1 } from './logo.svg'
import { ReactComponent as IconMenu2 } from './qm.svg'
import { Link } from "react-router-dom";

const Win =() =>{
        return(<div>
            <div className ="h3">You <br/> Win</div>
            <div id ="la">Congratulations!!</div>
            <IconMenu2 className = "qm"/> <IconMenu1 className = "logo"/>
            <Link to="/Enterword">
            <button className ="button">
              Play Again!
              </button>
              </Link>
        </div>);
    }
export default Win;