import { LoadingOutlined } from "@ant-design/icons";
import { Skeleton, Divider, Spin } from "antd";

const SKELETON_COUNT = 18;

export const ShimmerUI = (props) => {
    return (
        <>
            <div className="divider">
                <Spin
                    indicator={
                        <LoadingOutlined spin style={{ color: "var(--clr-primary)" }} />
                    }
                    size="large"
                    style={{ marginRight: "20px" }}
                />
                Finding Images for <i>{props.query}</i>
            </div>
            <div className="shimmer-grid-container">
                {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <Skeleton.Image
                        className="shimmer-card-container"
                        style={{ width: "100%", height: 300 }}
                        key={index}
                        active={props.loading}
                    />
                ))}
            </div>
        </>
    );
};
