
import styles from './App.module.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { LandingPages } from './pages/LandingPages';
import MovieDetails from './Components/MoviesDetails/MovieDetails';



function App() {
  return (
    <Router>
      <header>
      <Link to='/'><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
      <Switch>
      <Route exact path='/movies/:movieId'><MovieDetails/></Route>
      <Route path='/'><LandingPages/></Route>
        
      </Switch>
       </main>
    </Router>
  );
}

export default App;
