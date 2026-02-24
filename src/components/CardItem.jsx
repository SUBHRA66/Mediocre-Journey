import { LinkOutlined } from "@ant-design/icons";
import { Image, Modal } from "antd";
import { useState } from "react";
import { formatCaption } from "../util/format";
export const CardItem = (props) => {
    const [selected, setSelected] = useState(null);
    const formattedCaption = formatCaption(props?.imageObject?.caption);

    return (
        <div className="card-container floating">
            <Image
                width="100%"
                preview={false}
                onClick={props.onClick}
                style={{ objectFit: "cover", height: 300, cursor: "pointer" }}
                alt={formatCaption}
                className="card-image"
                src={props.imageObject.url}
            />

            <div className="card-body">
                <div
                    className="clamp-3"
                    onClick={props.onClick}
                    title={formattedCaption}
                >
                    {formattedCaption}
                </div>
            </div>
        </div>
    );
};

{
    /*
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
                                                                                      </p>*/
}
