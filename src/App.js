import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Galery from './components/galery/Galery';
import Contact from './components/Contact';
import About from './pages/About';



function App() {
  return (
    <>
    <BrowserRouter> 
        <NavBar />
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/galeria" component={Galery}/>
             <Route path="/contato" component={Contact} />
             <Route path="/sobre" component={About}/>
          </Switch>
         
     </BrowserRouter>
     </>
  );
}

export default App;
