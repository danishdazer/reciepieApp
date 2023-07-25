import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home} from "./pages/home.js";
import {Auth} from "./pages/auth.js";
import {Saved} from "./pages/saved-recipes.js"
import {Create} from "./pages/create-recipes.js"
import { Navbar } from "./components/navbar.js";
import "./App.css"
function App() {
  return(
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/auth" element={<Auth />} />
          <Route path ="/create-recipie" element={<Create />} />
          <Route path ="/saved-recipie" element={<Saved />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
