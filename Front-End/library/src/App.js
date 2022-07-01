import "./App.css";
import React, { useEffect } from "react";
import DataList from "./components/DataList";
import SearchBar from "./components/SearchBar";
import InputForm from "./components/InputForm";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    document.body.style.background = "lightgray";
  }, []);
  return (
    <div className="container mt-5">
      <SearchBar />
      <Routes>
        <Route path="/datalist" element={<DataList />} />
        <Route path="/forms" element={<InputForm />} />
      </Routes>
    </div>
  );
}

export default App;
