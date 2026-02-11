import { Layout, Typography } from "antd";
import {
  LinkedinOutlined,
  FacebookOutlined,
  XOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

export const CustomFooter = () => {
  return (
    <Footer className="custom-footer">
      <Typography.Text className="contact-us">
        Contact Us {": "}
        <LinkedinOutlined style={{fontSize:"20px"}}/> {" | "} <FacebookOutlined style={{fontSize:"20px"}} /> {" | "} <XOutlined style ={{fontSize: "20px"}}/>
      </Typography.Text>
    </Footer>
  );
};
