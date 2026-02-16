import { LinkOutlined } from "@ant-design/icons";
import { Image } from "antd";
export const CardItem = (props) => {
    return (
        <div className="card-container">
            <Image
                width="100%"
                preview={true}
                style={{ objectFit: "cover", height: 180 }}
                className="card-image"
                src={props.imageObject.url}
            />

            <div className="card-body">
                <>
                    <h3 className="card-title">{props.imageObject.title}</h3>
                    <p className="card-desc">Luxury property in Monaco</p>
                </>
            </div>
        </div>
    );
};
