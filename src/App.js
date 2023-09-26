import './App.css';
// Importing bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Importing React Router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Layout/Navbar/navbar';
import Home from './Pages/home';
import AddUser from './Users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
