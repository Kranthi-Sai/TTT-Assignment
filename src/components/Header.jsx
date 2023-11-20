import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopping Logo" />
        <span className="head">| STORIES</span>
      </Link>
      <Link to="/courses">
        <div className="course">Courses</div>
      </Link>
    </header>
  );
};
