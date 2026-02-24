import { useState } from "react";
import { CustomModal } from "./Modal";

export const Dummy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>this is your custom modal</h2>
                <div className="modal-content">
                    <img className="modal-image" src={isOpen?.url} alt="" />

                    <div className="modal-body">{formatCaption(isOpen?.caption)}</div>
                </div>
            </CustomModal>
        </div>
    );
};
