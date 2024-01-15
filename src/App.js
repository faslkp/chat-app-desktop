import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Chat from "./components/screens/Chat";
import React from "react";
import ChatProfile from "./components/screens/ChatProfile";

export const UserContext = React.createContext();

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/chat/:id" Component={Chat} />
                <Route path="/chat/:id/profile" Component={ChatProfile} />
            </Routes>
        </Router>
    );
}

export default App;
