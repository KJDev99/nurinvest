import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar'
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </div>
  );
}

export default App;
