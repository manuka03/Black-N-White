import { ReactComponent as IconMenu1 } from './logo.svg'
import { ReactComponent as IconMenu2 } from './qm.svg'


const Win =() =>{
    return(<div>
        <div className ="h3">You <br/> Win!</div>
        <div id ="la">Congratulations!!</div>
        <IconMenu2 className = "qm"/> <IconMenu1 className = "logo"/>
      
    </div>);
}
export default Win;