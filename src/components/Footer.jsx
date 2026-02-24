import { Layout } from "antd";
import { STR_COPYRIGHT } from "../constants/strings.js";
import {
    LinkedinOutlined,
    FacebookOutlined,
    XOutlined,
    CopyrightOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

export const CustomFooter = () => {
    return (
        <div className="footer-container">
            <Footer className="custom-footer">
                <div className="footer-left">
                    <CopyrightOutlined /> {STR_COPYRIGHT}
                </div>
                <div className="footer-center">
                    <LinkedinOutlined className="social-icons" />
                    <FacebookOutlined className="social-icons" />
                    <XOutlined className="social-icons" />
                    <LinkedinOutlined className="social-icons" />
                </div>
                <div className="footer-right">
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Cookies</span>
                    <span>Sitemap</span>
                </div>
            </Footer>
        </div>
    );
};
