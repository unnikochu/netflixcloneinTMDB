
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action,originals,comedyMovies} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost  url={action} title='Action Movies' isSmall />
      <RowPost  url={comedyMovies} title='Comedy Movies' isSmall />
     
    </div>
  );
}

export default App;
