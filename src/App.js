import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTripList from "./components/CreateTripList";
import Home from "./components/Home";

 
function App() {
  const [select, setSelectSeason] = useState('')
  const [transportName, setTransportName] = useState([]);
  const [selectCountry, setSelectCountry] = useState('')
  const [newTrip, setNewTrip] = useState([])
  const [selectDate, setSelectDate] = useState([])
   

  return (
    <div>   
        <Routes>
        <Route path="/add" element={<CreateTripList select={select} setSelectSeason={setSelectSeason} transportName={transportName} setTransportName={setTransportName} selectCountry={selectCountry} setSelectCountry={setSelectCountry} newTrip={newTrip} setNewTrip={setNewTrip} selectDate={selectDate} setSelectDate={setSelectDate} />}> Create trip</Route>
          <Route path='/' element={<Home select={select} transportName={transportName} selectCountry={selectCountry} newTrip={newTrip} selectDate={selectDate} />}> Home </Route>
        </Routes>
    </div> 
  ); 
} 

export default App;
