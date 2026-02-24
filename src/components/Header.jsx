import logo from "../assets/logo_new.png";
import { useState, useEffect } from "react";
import { Dropdown } from "antd";
import {
    MenuOutlined,
    MoonOutlined,
    SunOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import { STR_PLATFORM_NAME } from "../constants/strings.js";
import { useTheme } from "../theme/themeProvider.jsx";

const items = [
    { key: "1", label: "Login" },
    { key: "2", label: "Signup" },
    { key: "3", label: "About Us" },
];

export const Header = (props) => {
    const { toggleTheme, darkMode } = useTheme();

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-left">
                    <img className="logo" src={logo} alt="mediocre_journey" />
                    <div className="heading">
                        <h2>{STR_PLATFORM_NAME}</h2>
                    </div>
                </div>
                <div className="header-right">
                    <div className="theme-toggle">
                        {darkMode ? (
                            <SunOutlined onClick={toggleTheme} />
                        ) : (
                            <MoonOutlined onClick={toggleTheme} />
                        )}
                    </div>
                    <div className="home-icon">
                        <HomeOutlined
                            onClick={props.onHomeClick}
                            style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                margin: "5px",
                                cursor: "pointer",
                                paddingRight: "5px",
                            }}
                        />
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
        </div>
    );
};
