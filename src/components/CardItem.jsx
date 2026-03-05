import { Image } from "antd";
import { useState } from "react";
import { formatCaption } from "../util/format";
export const CardItem = (props) => {
    const formattedCaption = formatCaption(props?.imageObject?.caption);

    return (
        <div className="card-container floating">
            <Image
                width="100%"
                preview={false}
                onClick={props.onClick}
                style={{ objectFit: "cover", height: 300, cursor: "pointer" }}
                alt={formattedCaption}
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
