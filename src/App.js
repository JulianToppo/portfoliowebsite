
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      
       <Navbar/>
       <Introduction/>
       <About/>
       <Experience/>
       <Projects/>
       <Contact/>
    </div>
   
  );
}

export default App;
