import { ReactComponent as IconMenu1 } from './head.svg';
import { ReactComponent as IconMenu2 } from './tagline.svg';
import { Link } from "react-router-dom";
import {fusername} from "./Enteruser";

const Enterword = () => {
  console.log(fusername)
    return(
        <div>
          <div>
          <IconMenu1 className = "head"/><IconMenu2 className = "tagline"/>
        </div>
        <div><input placeholder={'No of letters :'}   className="textbox"/></div>
        <Link to="/Match">
        <button className ="button">
            Confirm
          </button>
          </Link>
        </div>
    );
}
export default Enterword;