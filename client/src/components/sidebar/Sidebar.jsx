import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
          assumenda!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>;
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem"></div>
      <span className="sidebarTitle">FOLLOW ME</span>
      <div className="sidebarSocial">
        <i className="socialMediaIcons fab fa-linkedin"></i>
        <i className="socialMediaIcons fab fa-github-square"></i>
        <i className="socialMediaIcons fas fa-address-card"></i>
        <i className="socialMediaIcons fab fa-codepen"></i>{" "}
      </div>
    </div>
  );
}
