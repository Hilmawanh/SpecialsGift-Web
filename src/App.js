import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Sharing from './Components/Sharing/Sharing'
import Decor from './Components/Decorations/Decor';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Sharing />
      <Decor />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
