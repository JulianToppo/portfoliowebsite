
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div>
       <Navbar/>
       <Introduction/>
       <About/>
       <Experience/>
    </div>
   
  );
}

export default App;
