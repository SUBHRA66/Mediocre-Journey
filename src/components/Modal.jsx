import { useEffect, useState } from "react";
import { formatCaption } from "../util/format";
export const CustomModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key == "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydon", handleEsc);
            document.body.style.overflow = "hidded";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <div className="modal-parent-temp" onClick={onClose}>
            <div className="modal-doc-temp" onClick={(e) => e.stopPropagation()}>
                <button className="button-close-temp" onClick={onClose}>
                    close
                </button>
                <div className="modal-content">
                    <img className="modal-image" src={isOpen?.url} alt="" />

                    <div className="modal-body">{formatCaption(isOpen?.caption)}</div>
                </div>
            </div>
        </div>
    );
};
