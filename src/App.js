import './App.css';
import Topbar from './navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudentList from './student-list';
import EditStudent from './edit-student';
import AddStudent from './add-student';
import StudentManagement from './Students-management';
import Interface2 from './Interface2';


function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/interface2" element={<Interface2 />} exact />
        <Route path="/" element={<StudentManagement />} exact>
          <Route path="/" element={<StudentList />} exact />
          <Route path="/add-student" element={<AddStudent />} exact />
          <Route path="/edit/:id" element={<EditStudent />} exact />
        </Route>
        <Route path="/" element={<StudentList />} exact />
      </Routes>
    </Router >
  );
}

export default App;
