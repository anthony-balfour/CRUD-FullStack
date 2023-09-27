import './App.css';
// Importing bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Importing React Router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Layout/Navbar/navbar';
import Home from './Pages/home';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path="/edituser/:id" element={<EditUser />} />
            <Route exact path="/viewuser/:id" element={<ViewUser />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
