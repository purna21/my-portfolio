import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';
import WikipediaImg from './Wikipedia.png';
import About from './About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills />
      {/* Project */}
      <div className='project_container' id='project'>
        <h2>Projects</h2>
        <Project
          title='Wikipedia Search Engine'
          desc='A redesigned Wikipedia Search Engine website, built using technologies
          like Html, Css & Vanilla Javascript. This website fetches the data from an 
          Rest Api and displays the search results.'
          imageUrl={WikipediaImg}
          projectUrl='https://purna21.github.io/wikipedia-search-engine/'
        />
        <Project
          title='Random Password Generator'
          desc='This website generates a Random Password everytime the user feel like creating
          one. User can select the password length ranging from [0 - 25]. Built using technologies like
          Html, Css & Javascript.'
          imageUrl='https://img.freepik.com/premium-vector/3d-locked-password-field-isolated-white-background-icon-web-app-3d-render-vector-illustration_165488-3691.jpg'
          projectUrl='https://purna21.github.io/random-password-generator/'
          order='1' />
      </div>
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
