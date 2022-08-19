import { ReactComponent as IconMenu1 } from './logo.svg'
import { ReactComponent as IconMenu2 } from './qm.svg'


const Lose =() =>{
    return(<div>
        <div className ="h3">You <br/> Lose :(</div>
        <div id ="la">Better luck next<br/> time...</div>
        <IconMenu2 className = "qm"/> <IconMenu1 className = "logo"/>
      
    </div>);
}
export default Lose;