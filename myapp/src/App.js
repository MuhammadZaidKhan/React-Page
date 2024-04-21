import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/Components/Naavbar";
import Navigation from "../src/Components/Navigation";
import Card from "../src/Components/Card";
import Footer from './Components/Footer';
import Bot from './Components/Bot';

function App() {
  return (
    <>
      <Navbar />
      <Bot />
      <Navigation />
      <h3 className='fw-bold mt-3' style={{ marginLeft: '2rem' }}>Convert to PDF</h3>
      <Card />
      <Footer />
    </>
  );
}

export default App;
