import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Dasboard } from './Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/demo-project" element={<Dasboard />}></Route>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
