import logo from "../assets/logo_mj.jpg";
import { useState } from "react";
import { Dropdown } from "antd";
import { MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "Login" },
  { key: "2", label: "Signup" },
];

export const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);
    const ToggleTheme= () =>{
        setDarkTheme(!darkTheme);
    }
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="mediocre_journey" />
      <div className="heading">
        <h2>Mediocre Journey</h2>
      </div>
      <div className="header-right">
        <div className="theme-toggle" onClick={ToggleTheme}>
          {darkTheme ? <MoonOutlined /> : <SunOutlined />}
        </div>
        <div className="menu-container">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <MenuOutlined
              className="menu-icon"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
