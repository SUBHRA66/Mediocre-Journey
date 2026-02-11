import logo from "../assets/logo_mj.jpg";
import { useState, useEffect } from "react";
import { Dropdown } from "antd";
import { MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "Login" },
  { key: "2", label: "Signup" },
];

export const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="mediocre_journey" />
      <div className="heading">
        <h2>Mediocre Journey</h2>
      </div>
      <div className="header-right">
        <div className="theme-toggle">
          {theme === "light" ? (
            <SunOutlined onClick={() => setTheme("dark")} />
          ) : (
            <MoonOutlined onClick={() => setTheme("light")} />
          )}
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
