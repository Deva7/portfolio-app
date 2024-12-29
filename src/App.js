import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Education from "./components/Education/education";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Experience />
      <About />
    </div>
  );
}

export default App;
