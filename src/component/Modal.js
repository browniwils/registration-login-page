import { Fragment } from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const ModalBackDrop = ({ children }) => {
    return (
        <div className="back-drop">
            {children}
            <div className="close-icon">✕</div>
        </div>
    );
};

const OverLay = ({ text, children }) => {
    return (
        <div className="back-drop__overlay">
            <div className="image-container">
                <div>{text}</div>
            </div>
            <div className="content-container">{children}</div>
        </div>
    );
};

const Modal = ({ page, children }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <ModalBackDrop>
                    <OverLay text={page}>{children}</OverLay>
                </ModalBackDrop>,
                document.querySelector("body")
            )}
        </Fragment>
    );
};

export default Modal;
