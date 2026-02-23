import { Divider } from "antd";
import { CardItem } from "./CardItem";
export const Grid = (props) => {
    return (
        <>
            <div className="divider-container">
                <div className="divider-item">
                    Showing images for <i>{props.query}</i>
                </div>
                <div className="divider-item-2">
                    Showing {props?.totalItems} results
                </div>
            </div>
            <div className="grid-container">
                {props?.imgArray?.map((image, index) => (
                    <CardItem imageObject={image} />
                ))}
            </div>
        </>
    );
};
