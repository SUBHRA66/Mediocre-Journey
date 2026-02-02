import logo from "../assets/logo_mj.jpg";

export const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="mediocre_journey" />
      <div className="heading">Welcome to Mediocre Journey</div>
    </div>
  );
};
