import React from "react";
import Home from "./Home";
import Home2 from "./Home2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

