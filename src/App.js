import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import New from "./components/New/New";
import Contacts from "./components/Header/Contacts/Contacts";
import Home from "./components/Header/Home/Home";
import SignIn from "./components/Header/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper__content">
          <Routes>
            <Route
              path="/profile/*"
              element={<Profile store={props.store} />}
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs store={props.store} />}
            />
            <Route path="/music/*" element={<Music />} />
            <Route path="/new/*" element={<New />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/contacts/*" element={<Contacts />} />
            <Route path="/sign_in/*" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
