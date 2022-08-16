import ReactDOM from 'react-dom/client';
import App from './App';
import Enteruser from "./Enteruser";
import Enterword from "./Enterword";
import './styling.css';
import{BrowserRouter,Routes,Route,} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Enteruser" element={<Enteruser />} />
      <Route path="/Enterword" element={<Enterword />} />
    </Routes>
  </BrowserRouter>
)