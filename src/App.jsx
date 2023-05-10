// import logo from './logo.svg'
import './App.css';
import NavBar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </div>
  )
}

export default App
