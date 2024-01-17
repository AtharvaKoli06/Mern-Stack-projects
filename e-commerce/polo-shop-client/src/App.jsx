import React from "react";
/*
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
*/
import Router from "./routes/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
