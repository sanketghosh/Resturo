import Logo from "../Logo/Logo";
import "./Sidebar.scss";
import { MdFastfood, MdChair, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="logoContainer">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="menuItemContainer">
          <Link to="/">
            <div className="singleMenuItem">
              <MdChair className="singleMenuLogo" />
              <span className="singleMenuText">Tables</span>
            </div>
          </Link>

          <Link to="/menu">
            <div className="singleMenuItem">
              <MdFastfood className="singleMenuLogo" />
              <span className="singleMenuText">Food & Drinks</span>
            </div>
          </Link>
          <div className="singleMenuItem">
            <MdSettings className="singleMenuLogo" />
            <span className="singleMenuText">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
