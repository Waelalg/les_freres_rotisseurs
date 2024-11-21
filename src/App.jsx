import { Routes , Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return( 
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>
      <Home/>
      </div>
      <Footer/>
    </div>)
    }

export default App;
