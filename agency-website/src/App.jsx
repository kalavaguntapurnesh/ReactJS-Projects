import "./App.css";
import Clients from "./components/Clients";
import FirstMiddle from "./components/FirstMiddle";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FirstMiddle/>
      <Middle/>
      <Clients/>
      <Footer/>
      
    </div>
  );
}

export default App;
