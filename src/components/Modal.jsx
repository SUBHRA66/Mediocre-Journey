import { Modal } from "antd";
import { useState } from "react";

export const CustomModal = (props) => {
    return (
        <div>
            <Modal
                title="wolverine"
                open={props.modalOpened}
                onCancel={() => props.setModalOpened(false)}
            />
        </div>
    );
};
