import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form";
import Home from "./components/Home";
import Table from "./components/Table.jsx"

import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Table" element={<Table/>}/>
      </Routes>
       </BrowserRouter>
      

    </div>
  );
}

export default App;
