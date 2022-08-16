import { ReactComponent as IconMenu1 } from './head.svg';
import { ReactComponent as IconMenu2 } from './tagline.svg';
import { ReactComponent as IconMenu3 } from './info.svg';
import { useState } from 'react';
import { Link } from "react-router-dom";

const App = () => {
  const [teamcode, setteamcode] = useState(' ENTER A CODE....')
  const handleOnChange = (event) => {
    setteamcode('  '+event.target.value)
  }
  return(
    <div>
        <IconMenu1 className = "head"/><br/>
        <IconMenu2 className = "tagline"/>
        <div>
          <nav>
          <Link to="/Enteruser">
          <button className ="button">
          Random Match!
          </button>
          </Link>
          </nav>
        </div>
        <div className ="major">OR</div> 
        <hr className="divi"/><div className="text"> PLAY WITH FRIENDS </div><hr className="divi"/>
        <div><input placeholder={' ENTER A CODE....'}  onChange={handleOnChange} className="textbox"/></div>
        <div>
          <button className ="button">
            Play!
          </button> 
        </div>
        <IconMenu3 className="info"/>
        </div>
  )
}
export default App;
