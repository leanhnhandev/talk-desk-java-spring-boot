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
          <Route exact path="/admin/user/homeuser" element={<HomeUser />} />
          <Route exact path="/admin/user/adduser" element={<AddUser />} />
          <Route exact path="/admin/user/edituser/:id" element={<EditUser />} />
          <Route exact path="/admin/user/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>

    </div>
  );
}

export default AppUser;
