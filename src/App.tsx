import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import List from "./components/List";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;
