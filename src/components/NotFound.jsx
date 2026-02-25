import { Divider, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const NotFound = (props) => {
    return (
        <div className="not-found-container">
            <div className="divider">
                <CloseOutlined style={{ fontSize: 30 }} />
            </div>
            <div>
                <div>
                    No Data Found for <i>{props.query}</i>
                </div>
                <div>Try searching for something else</div>
            </div>
        </div>
    );
};
