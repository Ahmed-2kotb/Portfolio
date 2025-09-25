import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

function App() {
	return (
		<>
			<Navbar />
			<section id="home" style={{height: '100vh', background: '#0f172a'}}>
				<Hero />
				<Projects />
				<About />
				<Skills />
				 <Contact />
				<Footer/>
			</section>
		</>
	);
}

export default App;
