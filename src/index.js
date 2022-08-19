import ReactDOM from 'react-dom/client';
import App from './App';
import Enteruser from "./Enteruser";
import Enterword from "./Enterword";
import Match from './Match';
import Test from './test';
import Test2 from './test2';
import App2 from './manashree';
import Win from './Win';
import Lose from './Lose';
import './styling.css';
import{BrowserRouter,Routes,Route,} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Enteruser" element={<Enteruser />} />
      <Route path="/Enterword" element={<Enterword />} />
      <Route path="/Enterword/Match" element={<Match />} />
      <Route path="/test" element={<Test />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path="/app2" element={<App2 />} />
      <Route path="/Win" element={<Win />} />
      <Route path="/Lose" element={<Lose />} />
    </Routes>
  </BrowserRouter>
)
