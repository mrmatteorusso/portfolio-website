import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';




function AppContainer() {
  // const location = useLocation()

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default AppContainer;
