import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Search />} path="/search"></Route>
        <Route element={<Watch />} path="/watch/:id"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
