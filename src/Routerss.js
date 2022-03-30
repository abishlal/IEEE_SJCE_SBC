import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Excom19 from "./components/pages/Excom/Excom19";
import Excom21 from "./components/pages/Excom/Excom21";
import Excom20 from "./components/pages/Excom/Excom20";
import Society from "./components/pages/Society/Society";
import AboutUs from "./components/pages/AboutUs";
import Events20 from "./components/pages/Events/Events20";

import Events21 from "./components/pages/Events/Events21";
import Events22 from "./components/pages/Events/Events22";
import Membership from "./components/pages/Membership";
import Contact from "./components/pages/Contact";

import SignIn from "./components/pages/SignIn";

import Front from "./components/front";
import Excom from "./components/pages/Excom/excom";
import Excom22 from "./components/pages/Excom/Excom22";
import Excom18 from "./components/pages/Excom/Excom18";
import Excom17 from "./components/pages/Excom/Excom17";
import Excom16 from "./components/pages/Excom/Excom16";
import Excom15 from "./components/pages/Excom/Excom15";
import Footer from "./components/Footer";
import Gallery from "./components/pages/Gallery";

const Routerss = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Front />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/AboutUs"
          element={
            <>
              <Header />
              <AboutUs />
            </>
          }
        />

        <Route
          exact
          path="/Excom22"
          element={
            <>
              <Header />
              <Excom />
              <Excom22 />
            </>
          }
        />
        <Route
          exact
          path="/Excom21"
          element={
            <>
              <Header />
              <Excom />
              <Excom21 />
            </>
          }
        />
        <Route
          exact
          path="/Excom20"
          element={
            <>
              <Header />
              <Excom />
              <Excom20 />
            </>
          }
        />
        <Route
          exact
          path="/Excom19"
          element={
            <>
              <Header />
              <Excom />
              <Excom19 />
            </>
          }
        />
         <Route
          exact
          path="/Excom18"
          element={
            <>
              <Header />
              <Excom />
              <Excom18 />
            </>
          }
        />
        <Route
          exact
          path="/Excom17"
          element={
            <>
              <Header />
              <Excom />
              <Excom17 />
            </>
          }
        />
        <Route
          exact
          path="/Excom16"
          element={
            <>
              <Header />
              <Excom />
              <Excom16 />
            </>
          }
        />
        <Route
          exact
          path="/Excom15"
          element={
            <>
              <Header />
              <Excom />
              <Excom15 />
            </>
          }
        />
        <Route
          exact
          path="/Societies"
          element={
            <>
              <Society />
            </>
          }
        />

        <Route />

        <Route
          exact
          path="/Events"
          element={
            <>
              <Header />
              <Events20 />
              <Events21 />
              <Events22 />
            </>
          }
        />
        <Route
          exact
          path="/Membership"
          element={
            <>
              <Header />
              <Membership />
            </>
          }
        />

        <Route
          exact
          path="/Gallery"
          element={
            <>
              <Header />
              <Gallery />
            </>
          }
        />
        <Route
          exact
          path="/ContactUs"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />
        <Route
          exact
          path="/SignIn"
          element={
            <>
              <Header />
              <SignIn />
            </>
          }
        />
      </Routes>
        
    </Router>
  );
};

export default Routerss;
