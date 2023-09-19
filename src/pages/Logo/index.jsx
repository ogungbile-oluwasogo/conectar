import logo from "../../images/Asset 5.png";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Conectar" className={style.logo} />
    </div>
  );
};

export default Logo;
