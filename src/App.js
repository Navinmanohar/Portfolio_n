import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      {/* NavBar */}
      <Navbar/>
      {/* Intro */}
      <Home/>
      {/* about */}
      <AboutMe/>
    </div>
  );
}

export default App;
