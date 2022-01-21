import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from './pages/Home';
import MovieDetails from './pages/watchMovies';
import NavBar from './components/navBar';
import Favourites from './pages/Favourites';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import NotFound from './components/notfound';
import { LanguageContext } from './context/languageContext';
import { useState } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const fav = useSelector((state) => state.fav.list);
  const [contextLanguage, setContextLanguage] = useState("en")


  return (
    <>
      <LanguageContext.Provider value={{ contextLanguage, setContextLanguage }}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path={"/"} exact component={Movies} />
            <Route path={"/Home"} exact component={Movies} />
            <Route path={"/Favourites"} exact component={Favourites} />
            <Route path={"/LoginForm"} exact component={LoginForm} />
            <Route path={"/RegisterForm"} exact component={RegisterForm} />
            <Route path={"/watchMovies/:id"} exact component={MovieDetails} />
            <Route path={"*"} component={NotFound} />
          </Switch>
        </BrowserRouter>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
