import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div className='App'>
      <Login />
      <Register />
      {/* <BrowserRouter>
          {/* http://localhost:3000/login 
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
      </BrowserRouter> */}
    </div>
  );
}

export default App
