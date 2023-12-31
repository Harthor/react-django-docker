import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Posts from './Posts'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Posts />
    </div>
    </BrowserRouter>
  );
}

export default App;
