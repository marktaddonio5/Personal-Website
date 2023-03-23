import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WebDevelopment from './section-components/WebDevelopment';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <LandingPage />
        <Main />
      </>
    </BrowserRouter>
  );
}

export default App;
