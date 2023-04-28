import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <br />
      <Banner/>
      <br />
      <Footer/>
    </div>
  );
}

export default App;

