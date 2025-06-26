import Logolight from "../HeaderLogos/Logolight.jpg";
import LightTheme from "../HeaderLogos/LightTheme.jpg";
import Logodark from "../HeaderLogos/Logodark.png";
import DarkTheme from "../HeaderLogos/DarkTheme.png";

import "./index.css";

const Header = (props) => {
  const { change, theme } = props;

  const changedTheme = () => {
    change();
  };

  return (
    <div className={`headerContainer ${theme && "darkEff"}`}>
      <div className="containerLogo">
        <img className="logo" src={theme ? Logodark : Logolight} alt="Logo" />
        <p className="Name">ANISH KUMAR SINHA</p>
      </div>
      <ul className="detailsContainer">
        <li className="listElement">Home</li>
        <li className="listElement">About</li>
        <li className="listElement">Resume</li>
        <li className="listElement">Skills</li>
        <li className="listElement">Projects</li>
        <li className="listElement">Contact</li>
        <li onClick={changedTheme}>
          <img
            className="theme"
            src={theme ? DarkTheme : LightTheme}
            alt="Logo"
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
