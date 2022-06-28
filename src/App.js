import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";
import Item from "./components/Item";
import Search from "./components/Search";

//importando el data provider
import { DataProvider } from "./components/Context/DataContext";



function App() {


  return (
    <DataProvider>

        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/item" element={<Items />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/items/:id" element={<Item />} />
          </Routes>
        </Router>
    </DataProvider>

  );
}

export default App;
