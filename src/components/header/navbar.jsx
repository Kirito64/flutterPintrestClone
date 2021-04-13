import "./navbar.css";
import { FaSave, FaSearch } from "react-icons/fa";
import SearchBar from "./searchbar";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.png" className="logo" />
      </div>
      <div className="nav">Home</div>

      <div className="nav">Today</div>
      <div className= "search">
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default NavBar;
