import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };
  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (e) {
      console.log(e);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className="container container-custom">
        <ToastContainer/>
      <div className="card">
        <img src="/media/kite-logo.svg" className="img-fluid w-25"></img>
        <h2>Login to Kite</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-between gap-3">
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleOnChange}
            value={email}
          ></input>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={handleOnChange}
            value={password}
          ></input>
          <button type="submit" className="btn btn-secondary">
            Log In
          </button>
        </form>
        <a>Forgot user ID or password? </a>
      </div>
    </div>
  );
};

export default Login;
