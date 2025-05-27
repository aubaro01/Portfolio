import './App.css'
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header'
import About from './components/about';
import Home from './components/home';
import Projects from './components/Projects';
import Blog from './components/PostsType';
import BlogDetail from './components/add/PostsDetail';
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
