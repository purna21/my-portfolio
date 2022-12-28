import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='project_container'>
        <h2>Projects</h2>
        <Project
          title='Project1'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, accusamus saepe ut animi eligendi adipisci delectus
                    mollitia eum omnis exercitationem esse nisi! Nihil tenetur
                    excepturi rem perferendis! Soluta, cumque magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, accusamus saepe ut animi eligendi adipisci delectus
                    mollitia eum omnis exercitationem.'
          imageUrl='https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q='
        />
        <Project
          title='Project2'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, accusamus saepe ut animi eligendi adipisci delectus
                    mollitia eum omnis exercitationem esse nisi! Nihil tenetur
                    excepturi rem perferendis! Soluta, cumque magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, accusamus saepe ut animi eligendi adipisci delectus
                    mollitia eum omnis exercitationem.'
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPviQbCTGhgKaUNhkg_uYtTu9Qu0x6I1IS2Q&usqp=CAU'
          order='1' />
      </div>
    </div>
  );
}

export default App;
