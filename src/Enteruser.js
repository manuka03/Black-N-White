import { ReactComponent as IconMenu1 } from './head.svg'
import { ReactComponent as IconMenu2 } from './tagline.svg'
import { ReactComponent as IconMenu3 } from './info.svg'
import { ReactComponent as IconMenu4 } from './close.svg'
import { ReactComponent as IconMenu5 } from './next.svg'
import { Link } from "react-router-dom";

const Enteruser = () =>{
    return(
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Swarnakshara </title>
      </head>
      <body>
        <div class="blur">
        <IconMenu1 class = "head"/><br/>
        <IconMenu2 class = "tagline"/>
        <div>
          <button class ="button">
          Random Match!
          </button>
        </div>
        <div class ="major">OR</div> 
        <hr class="divi"/><div class="text"> PLAY WITH FRIENDS </div><hr class="divi"/>
        <div><input placeholder={' ENTER A CODE....'}  class="textbox"/></div>
        <div>
          <button class ="button">
            Play!
          </button> 
        </div>
        <IconMenu3 class="info"/>
        </div>
        <div class="popup">
            <nav>
            <Link to="/">
                <IconMenu4 class="cross"/><br/>
            </Link>
            </nav>
            <div class="popupin">Enter Username....</div>
            <div><input class="textbox2"/></div>
            <nav>
            <Link to="/Enterword">
            <IconMenu5 class="next"/>
            </Link>
            </nav>
        </div>
      </body>
    </html>
    );
}

export default Enteruser;
