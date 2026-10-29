import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Welcome from "./pages/welcome";
import Forget from "./pages/forgetpass";

function App() {
  // useEffect(() => {
  //   alert("Hungry? skip the que and order your favorites online now!");
  // },[]);

  return (
    <>

      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Hero />
              <Menu />
              <Footer />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Menu />
              <Footer />
            </>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/forgetpass" element={<Forget />} />


      </Routes>


    </>
  );
}

export default App;
