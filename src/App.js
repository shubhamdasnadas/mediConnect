import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Login from './Componenet/Login';
import Register from './Componenet/Register';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Outlet />
    </div>
  );
}

export default App;
