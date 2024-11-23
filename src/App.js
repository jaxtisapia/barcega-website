import "./App.css";
import "./assets/css/bootstrap.css"
import "./assets/css/main.css"

import Header from "./pages/Header";
import Agency from "./pages/Agency";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Discount from "./pages/Discount";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Agency />
      <Service />
      <Project />
      <Contact />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;