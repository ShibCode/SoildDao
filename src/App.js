import React from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
