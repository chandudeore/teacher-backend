import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import {
  loginError,
  loginLoading,
  loginSuccess,
} from "../Redux/adminlogin/action";
import "../style/login.css";
//import { useNavigate, Navigate } from "react-router-dom";

export const Adminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.login);

  if (isAuthenticated) <Navigate to="/"></Navigate>;

  const handleLogin = (e) => {
    e.preventDefault();
    const adminDetail = {
      username,
      password,
    };
    dispatch(loginLoading());
    fetch("http://localhost:8080/admin-login", {
      method: "POST",
      body: JSON.stringify(adminDetail),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(loginSuccess({ username, token: res.token }));
        navigate("/");
      })
      .catch((err) => dispatch(loginError(err)));
  };

  return (
    <>
      <div>
        <input
          className="input1"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter your Usename"
        />{" "}
        <br />
        <input
          className="input1"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your Password"
        />
      </div>
      <div>
        <button onClick={handleLogin} className="loginbtn">
          Login
        </button>
      </div>
    </>
  );
};
