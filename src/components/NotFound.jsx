import { Divider, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <Divider className="divider">
        <CloseOutlined style={{ fontSize: 30 }} />
      </Divider>
      <p>
        <Typography.Text>No Data Found</Typography.Text>
        <br />
        <Typography.Text>Try searching for something else</Typography.Text>
      </p>
    </div>
  );
};
