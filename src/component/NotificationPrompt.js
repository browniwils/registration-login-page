const NotificationPrompt = ({ type, message }) => {
    return (
        <div className={`notificaton ${type === "success" ? "success-message" : ""}${type === "failed" ? "error-message" : ""}`}>
            {type === "success" && <i className="fa-regular fa-circle-check"></i>}
            {type === "failed" && <i className="fa-solid fa-circle-exclamation"></i>}
            <p className="message">{message}</p>
        </div>
    );
};

export default NotificationPrompt;
