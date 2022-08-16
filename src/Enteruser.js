import { ReactComponent as IconMenu1 } from './head.svg'
import { ReactComponent as IconMenu2 } from './tagline.svg'
import { ReactComponent as IconMenu3 } from './info.svg'
import { ReactComponent as IconMenu4 } from './close.svg'
import { ReactComponent as IconMenu5 } from './next.svg'
import { Link , useNavigate} from "react-router-dom";
import { useState } from 'react';
import $ from 'jquery';
let fusername='';

const Enteruser = () =>{
  const [username, setusername] = useState('');
  const handleOnChange = (event) => {
    setusername(event.target.value);
  }
  const Errormessage = ()=>{
    if(username===''){
    return(
      <div className="errormessage">***Enter valid username</div>
    )}
  }
  const store = ()=>{
    fusername = username;
  }

  const Icon = ()=>{
    if(username ===''){
      return(<div>
      <IconMenu5 id = "nex" className="nextempty"/></div>)
    }
    return(<Link to="/Enterword">
    <IconMenu5 id = "nex" className="next" onClick={store} type='button'/>
    </Link>)
  }

    const navigate = useNavigate();
    function goToLoginPage() {fusername = username ; 
      navigate('/Enterword');} 

    return(
      <div>
        <div className="blur">
        <IconMenu1 className = "head"/>
        <IconMenu2 className = "tagline"/>
        <div>
          <button className ="button">
          Random Match!
          </button>
        </div>
        <div className ="major">OR</div> 
        <hr className="divi"/><div className="text"> PLAY WITH FRIENDS </div><hr className="divi"/>
        <div><input placeholder={' ENTER A CODE....'}  className="textbox"/></div>
        <div>
          <button className ="button">
            Play!
          </button> 
        </div>
        <IconMenu3 className="info"/>
        </div>
        <div className="popup">
            <nav>
            <Link to="/">
                <IconMenu4 className="cross"/>
            </Link>
            </nav>
            <div className="popupin">Enter Username....</div>
            <div><input value={username} onChange={handleOnChange} onKeyPress={(e) => {if(e.key === 'Enter'){goToLoginPage()}}} className="textbox2"/>
            <Errormessage/>
            </div>
            <nav>
            <Icon />
            </nav>
        </div>
        </div>
    );
}

export default Enteruser;
export {fusername};
