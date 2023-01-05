import { Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Header from './components/Header'
import Register from './components/Register'
import ConfirmEmail from './components/ConfirmEmail'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/confirmEmail" element={<ConfirmEmail/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
