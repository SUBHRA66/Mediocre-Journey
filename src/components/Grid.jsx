import { Modal } from "antd";
import { CardItem } from "./CardItem";
import { useState } from "react";
import { formatCaption } from "../util/format";

export const Grid = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const query = props?.query;
    return (
        <>
            <div className="divider-container">
                <div className="divider-item">
                    Showing images for <i>{query}</i>
                </div>
                <div className="divider-item-2">
                    Found {props?.totalItems} matching results
                </div>
            </div>
            <div className="grid-container">
                {props?.imgArray?.map((image) => (
                    <CardItem
                        key={image.url}
                        imageObject={image}
                        onClick={() => {
                            setSelectedImage(image);
                        }}
                    />
                ))}
            </div>
            {selectedImage && (
                <Modal
                    className="modal-container"
                    open={!!selectedImage}
                    onCancel={() => setSelectedImage(null)}
                    centered
                    focusTriggerAfterClose={false}
                    autoFocusButton={null}
                    keyboard={false}
                    footer={null}
                    width="75%"
                    closeIcon={<span className="custom-close">✕</span>}
                >
                    <div className="modal-content">
                        <img className="modal-image" src={selectedImage?.url} alt="" />

                        <div className="modal-body">
                            <b>Description:</b> {formatCaption(selectedImage?.caption)}
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};
