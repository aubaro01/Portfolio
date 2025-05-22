import './App.css'
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header'
import About from './components/about';
import Home from './components/home';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <Router>
        <div>
          <Header />
          <main className="py-3">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
