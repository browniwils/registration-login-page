import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";

import NotificationPrompt from "./NotificationPrompt";
import Spinner from "./LoadingSpinner";

const Signup = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    const [showNotification, setShowNotification] = useState({ show: false, type: "", message: "" });

    const usernameRef = useRef();
    const emailRef = useRef();
    const fristnameRef = useRef();
    const lastnameRef = useRef();
    const passwordRef = useRef();
    const confirmpasswordRef = useRef();

    const formHandler = (item) => {
        item.preventDefault();
        const firstname = fristnameRef.current.value.trim();
        const lastname = lastnameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const username = usernameRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const confirmPassword = confirmpasswordRef.current.value.trim();

        if (!username.length && email.length && firstname.length && lastname.length && password.length && confirmPassword.length && password === confirmPassword) {
            showNotification({ show: true, type: "failed", message: "Make sure fields are correct" });
            return;
        }

        setShowNotification({ show: false, type: "", message: "" });
        setShowSpinner(true);
        const data = localStorage.getItem(username);
        if (!data) {
            localStorage.setItem(username, JSON.stringify({ username, email, firstname, lastname, password }));
            setShowNotification({ show: true, type: "success", message: "User registered successful!" });
        } else {
            setShowNotification({ show: true, type: "failed", message: "User already exist!" });
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
                            <input ref={fristnameRef} className="form-input" type="text" placeholder="First Name:" />
                        </div>
                        <div className="form-group">
                            <input ref={lastnameRef} className="form-input" type="text" placeholder="Last Name:" />
                        </div>
                        <div className="form-group">
                            <input ref={emailRef} className="form-input" type="email" placeholder="Email:" />
                        </div>
                        <div className="form-group">
                            <input ref={usernameRef} className="form-input" type="text" placeholder="Username:" />
                        </div>
                        <div className="form-group">
                            <input ref={passwordRef} className="form-input" name="password" type="password" placeholder="Password:" />
                        </div>
                        <div className="form-group">
                            <input ref={confirmpasswordRef} className="form-input" type="password" placeholder="Confirm password:" />
                        </div>

                        <div className="form-group">
                            <button className="form-btn">Register</button>
                        </div>
                    </form>
                    <div className="other-links">
                        <Link to="/login">Login</Link>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Signup;
