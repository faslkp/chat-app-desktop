import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/screens/Chat";
import React from "react";

export const UserContext = React.createContext();

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Chat} />
                <Route path="/chat/:id" Component={Chat} />
            </Routes>
        </Router>
    );
}

export default App;
