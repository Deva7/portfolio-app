import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Education from "./components/Education/education";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
