import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/Homepage/Home'
import Calculator from './components/Calculator/Calculator'
import Palindrome from './components/palindrome/palindrome'
import Stopwatch from './components/Stopwatch/stopwatch'
import Random from './components/RandomNumber/Random'
import Contact from './components/contact/Contact'
import Clock from './components/clock/clocks'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <>
      <Header/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/palindrome" element={<Palindrome />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/random" element={<Random />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>

    </>
    </BrowserRouter>
  );
}

export default App;
