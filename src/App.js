import HeaderStuff from './component/header/header'
import BtnComponent from './component/btncomponent/buttonComponent';
import DisplayComponent from './component/displaycomponent/displaycomponent';
import LandingPage from './component/landingpage/landingPage';
import HomePage from './component/redundentPage/blankPage';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import imgOne  from './images/google_logo.png'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="homePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //  <HeaderStuff />
    //  <BtnComponent />
    //  {/* <DisplayComponent /> */}
    // </div>
  );
}

export default App;
