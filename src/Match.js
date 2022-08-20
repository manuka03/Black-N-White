import { ReactComponent as IconMenu3 } from './verBnW.svg';
import { ReactComponent as IconMenu1 } from './logo.svg'
import { ReactComponent as IconMenu2 } from './qm.svg'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Match = () =>{
  const Navigate = useNavigate();
    const [timer, setTimer] = useState(5);
    setTimeout(() => {
      if(timer<1){
        Navigate('/Guess');
      }
        else{
          setTimer(timer-1);
        }
    }, 1000);
    return(
        <div>
          
          <IconMenu3 className='side'/>
         
        <div className='side2'>You have <br/>matched with </div> 
        <div>Starts in...{timer}</div>
        <IconMenu2 className = "qm"/> <IconMenu1 className = "logo"/>
      
        </div>
    );
}
export default Match;