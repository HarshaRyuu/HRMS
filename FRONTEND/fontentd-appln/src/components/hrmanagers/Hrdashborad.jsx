import { Link, Outlet, useNavigate } from "react-router-dom";
const Hrdashboard = ()=>{
const navigate=useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/")
       }

    return(
        <>
            <h1>This one is hrmanagment page <span style={{ color: "blue",cursor:"pointer" }}> <a onClick={logout}>LogOut</a></span></h1>
        </>
    )
}
export default Hrdashboard;