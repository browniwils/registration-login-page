import { Routes, Route, Navigate } from "react-router-dom";

import Modal from "./component/Modal";
import Login from "./component/Login";
import Sigup from "./component/Signup";

import "./UI.css";
const register = "Register";
const login = "Login";

const SinglePage = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
                path={"/register"}
                element={
                    <Modal page={register}>
                        <Sigup />
                    </Modal>
                }
            ></Route>
            <Route
                path={"/login"}
                element={
                    <Modal page={login}>
                        <Login />
                    </Modal>
                }
            ></Route>
        </Routes>
    );
};

export default SinglePage;
