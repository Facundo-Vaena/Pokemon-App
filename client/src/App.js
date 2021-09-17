import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Creation from './components/Creation';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/detail' component={Detail}/>
      <Route path='/creation' component={Creation}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
