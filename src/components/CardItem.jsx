import { LinkOutlined } from "@ant-design/icons";
import { Image } from "antd";
export const CardItem = (props) => {
    return (
        <div className="card-container">
            <Image
                width="100%"
                preview={true}
                style={{ objectFit: "cover", height: 260 }}
                className="card-image"
                src={props.imageObject.url}
            />

            <div className="card-body">
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <h3 className="card-title">{props.imageObject.title}</h3>
                        <button
                            style={{
                                backgroundColor: "var(--clr-primary)",
                                color: "var(--clr-font-color)",
                                padding: "3px",
                                cursor: "pointer",
                                borderRadius: "6px",
                            }}
                        >
                            <b>Book Now</b>
                        </button>
                    </div>
                    <p className="card-desc">Luxury property in Monaco</p>
                    <p className="card-desc">
                        Rate <b>$300.00</b>
                    </p>
                </div>
            </div>
        </div>
    );
};
