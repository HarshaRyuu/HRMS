import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { Home, User, Calendar, Clock, BookOpen, MessageSquare } from "lucide-react";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="sidebar-title">HRMS</h1>
        <nav className="nav-links">
          <Link to="dashboard"><Home size={20} /> Dashboard</Link>
          <Link to="profile"><User size={20} /> Profile</Link>
          <Link to="attendance"><Calendar size={20} /> Attendance</Link>
          <Link to="leave-request"><Clock size={20} /> Leaves</Link>
          <Link to="performance"><BookOpen size={20} /> Performance</Link>
          <Link to="hr-queries"><MessageSquare size={20} /> queries</Link>
          <Link to="training"><MessageSquare size={20} /> Training</Link>
          
          <Link to="WFOffice"><MessageSquare size={20} /> 2office</Link>
          <Link to="stats"><MessageSquare size={20} /> Leave stats</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="topbar">
          <h2>Employee Dashboard</h2>
          <button onClick={logout}>LogOut</button>
        </div>
        <div className="main-outlet">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
