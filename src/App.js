import VendingMachine from "./VendingMachine"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chocolate from "./Chocolate"
import Fruit from "./Fruit"
import Chips from "./Chips"



function App() {
  return (
    <div className="App">
        <BrowserRouter>  
        <Routes>
          <Route path="/" element={<VendingMachine/>}/>   
          <Route path="fruit" element={<Fruit/>} />
          <Route path="chocolate" element={<Chocolate/>} />
          <Route path="chips" element={<Chips/>} />
        </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
