import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "@/assets/styles/globals.css";
import App from './App';


render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


