import ReactDOM from 'react-dom/client';
import App from './App';
import Enteruser from "./Enteruser";
import Enterword from "./Enterword";
import Match from './Match';
import Test from './test';
<<<<<<< HEAD
import Test2 from './test2';
import App2 from './manashree';
=======
import Win from './Win';
import Lose from './Lose';

>>>>>>> 1047df185c09f69ac584801aa7f377414b102c8d
import './styling.css';
import{BrowserRouter,Routes,Route,} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Enteruser" element={<Enteruser />} />
      <Route path="/Enterword" element={<Enterword />} />
      <Route path="/Enterword/Match" element={<Match />} />
      <Route path="/test" element={<Test />} />
<<<<<<< HEAD
      <Route path="/test2" element={<Test2 />} />
      <Route path="/app2" element={<App2 />} />
=======
      <Route path="/Win" element={<Win />} />
      <Route path="/Lose" element={<Lose />} />
>>>>>>> 1047df185c09f69ac584801aa7f377414b102c8d
    </Routes>
  </BrowserRouter>
)