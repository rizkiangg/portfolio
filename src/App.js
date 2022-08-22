import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import FreeMerch from './components/FreeMerch'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
        <FreeMerch/>
      </div>
    </div>
  );
}

export default App;
