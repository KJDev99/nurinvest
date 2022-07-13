import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar'
import SectionFour from './Components/SectionFour';
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';
import SectionFive from './Components/SectionFive';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
    </div>
  );
}

export default App;
