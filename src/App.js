
import Aboutus from './aboutus';
import './App.css';
import Navigation from './component/navigations';
import Homepage from './pages/homepage';
import Services from './pages/services';
import {Routes,Route}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <>
       
       <Navigation/><Routes>
       <Route exact path="/homepage" element= {<Homepage/>}></Route> 
       <Route exact path="/aboutus" element= {<Aboutus/>}></Route> 
       <Route exact path="/services" element= {<Services/>}></Route> 
     
     
     
       </Routes>
       
       
       
       </>
      </header>
    </div>
  );
}

export default App;
