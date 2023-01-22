import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Spinner from "./LoadingSpinner";
import NotificationPrompt from "./NotificationPrompt";

const Login = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    const [showNotification, setShowNotification] = useState({ show: false, type: "", message: "" });

    const usernameRef = useRef();
    const passwordRef = useRef();

    const formHandler = (item) => {
        item.preventDefault();
        if (!usernameRef.current.value.trim().length || !passwordRef.current.value.trim().length) {
            setShowNotification({ show: true, type: "failed", message: "Make sure fields are correct!" });
            return;
        }
        setShowNotification({ show: false, type: "", message: "" });
        setShowSpinner(true);

        const data = localStorage.getItem(usernameRef.current.value.trim());

        if (!data) {
            setShowNotification({ show: true, type: "failed", message: "Wrong username or password!" });
        } else {
            const user = JSON.parse(data);
            if (user.password === passwordRef.current.value.trim()) {
                setShowNotification({ show: true, type: "success", message: "Login successful!" });
            } else {
                setShowNotification({ show: true, type: "failed", message: "Wrong username or password!" });
            }
        }
        setShowSpinner(false);
    };

    return (
        <Fragment>
            {showNotification.show && <NotificationPrompt type={showNotification.type} message={showNotification.message} />}
            {showSpinner ? (
                <Spinner />
            ) : (
                <Fragment>
                    <form className="form" onSubmit={formHandler}>
                        <div className="form-group">
                            <input className="form-input" type="text" placeholder="Username:" ref={usernameRef} />
                        </div>
                        <div className="form-group">
                            <input className="form-input" type="password" placeholder="Password:" ref={passwordRef} />
                        </div>

                        <div className="form-group"></div>
                        <div className="form-group">
                            <button className="form-btn">Login</button>
                        </div>
                    </form>
                    <div className="other-links">
                        <Link to="/register">Register</Link>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Login;
