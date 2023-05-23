import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Employees from './components/Employees';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Employees/>
    </div>
  );
}

export default App;
