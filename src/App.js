import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
