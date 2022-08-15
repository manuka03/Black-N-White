import { ReactComponent as IconMenu1 } from './head.svg'
import { ReactComponent as IconMenu2 } from './tagline.svg'
import { ReactComponent as IconMenu3 } from './info.svg'
import { useState } from 'react'

const App = () => {
  const [teamcode, setteamcode] = useState(' ENTER A CODE....')
  const handleOnChange = (event) => {
    setteamcode('  '+event.target.value)
  }
  return(
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Swarnakshara </title>
      </head>
      <body>
        <IconMenu1 class = "head"/><br/>
        <IconMenu2 class = "tagline"/>
        <div>
          <button class ="button">
          Random Match!
          </button>
        </div>
        <div class ="major">OR</div> 
        <hr class="divi"/><div class="text"> PLAY WITH FRIENDS </div><hr class="divi"/>
        <div><input placeholder={' ENTER A CODE....'}  onChange={handleOnChange} class="textbox"/></div>
        <div>
          <button class ="button">
            Play!
          </button> 
        </div>
        <IconMenu3 class="info"/>
      </body>
    </html>
  )
}
export default App;
