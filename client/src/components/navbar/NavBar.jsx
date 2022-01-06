import { Link } from "react-router-dom";
import "./navbar.css";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <div className="left">
        <i className="socialMediaIcons fab fa-linkedin"></i>
        <i className="socialMediaIcons fab fa-github-square"></i>
        <i className="socialMediaIcons fas fa-address-card"></i>
        <i className="socialMediaIcons fab fa-codepen"></i>
      </div>
      <div className="center">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>{" "}
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="right">
        {user ? (
          <Link to="/settings">
            <img
              className="profilepic"
              src={PF + user.profilePic}
              alt="profile pic"
            />
          </Link>
        ) : (
          <ul>
            <Link className="link topListItem" to="/login">
              LOGIN
            </Link>
            <Link className="link topListItem" to="/register">
              REGISTER
            </Link>
          </ul>
        )}
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
