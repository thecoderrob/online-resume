import React, { useState } from "react";

import {
  Header,
  Home,
  Skills,
  Experience,
  Portfolio,
  Certificates,
  Contact,
  Footer,
} from "./components";

const App = () => {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <div className="">
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />

      <main>
        <Home setActiveLink={setActiveLink} />
        <Skills />
        <Experience />
        <Portfolio />
        <Certificates />
        <Contact />
      </main>

      <Footer setActiveLink={setActiveLink} />
    </div>
  );
};

export default App;
