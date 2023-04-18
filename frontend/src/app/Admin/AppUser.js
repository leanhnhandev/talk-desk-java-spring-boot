import './AppUser.css';
import "../../.././node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../.././layout/Navbar/Navbar';
import HomeUser from '../../pages/Admin/User/HomeUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../../pages/Admin/User/AddUser";
import EditUser from "../../pages/Admin/User/EditUser";
import ViewUser from "../../pages/Admin/User/ViewUser"

function AppUser() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeUser />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>

    </div>
  );
}

export default AppUser;
