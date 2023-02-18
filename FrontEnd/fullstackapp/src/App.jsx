import './App.css';
import {Routes,Route} from "react-router-dom" 
import { Register } from './components/Register';
import { Login } from './components/Login';
import { CreateNotes } from './components/CreateNotes';
import { AllNotes } from './components/Notes';
import {  NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <NavLink to="/register">Register User</NavLink>
      
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/createnotes" element={<CreateNotes/>}></Route>
        <Route path="/allnotes" element={<AllNotes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
