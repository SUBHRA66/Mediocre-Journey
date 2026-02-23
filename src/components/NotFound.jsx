import { Divider, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const NotFound = (props) => {
    return (
        <div className="not-found-container">
            <div className="divider">
                <CloseOutlined style={{ fontSize: 30 }} />
            </div>
            <p>
                <Typography.Text>
                    No Data Found for <i>{props.query}</i>
                </Typography.Text>
                <br />
                <Typography.Text>Try searching for something else</Typography.Text>
            </p>
        </div>
    );
};
