import { Divider } from "antd";
import { CardItem } from "./CardItem";
export const Grid = (props) => {
    return (
        <>
            <Divider className="divider">
                Showing images for <i>{props.query}</i>
            </Divider>
            <div className="grid-container">
                {props?.imgArray?.map((image, index) => (
                    <CardItem imageObject={image} />
                ))}
            </div>
        </>
    );
};
