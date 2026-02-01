import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SingupComponent = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  
  const { email, password, username, phone } = inputValue; // Added username

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
    
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", inputValue); // Debug log
      
      const { data } = await axios.post(
        "http://localhost:8000/signup", // ✅ Fixed route (added /auth)
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      
      console.log("Response:", data); // Debug log
      
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        // ✅ Clear form ONLY after success
        setInputValue({
          email: "",
          password: "",
          username: "",
          phone: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Error:", error); // Better error logging
      console.log("Error response:", error.response?.data); // Log backend error
      handleError(error.response?.data?.message || "Something went wrong!");
    }
    // ❌ REMOVED - Don't clear form here, only after success
  };

  return (
    <div className="container">
      <ToastContainer /> {/* ✅ Add ToastContainer */}
      
      <div className="row my-2">
        <h3>Signup now</h3>
        <h4 className="text-secondary">Or track your existing application</h4>
      </div>

      <div className="row my-2">
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
          
          {/* ✅ Added Username field */}
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            className="p-2 w-50" 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Username" 
            value={username} 
            onChange={handleOnChange}
            required
          />

          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            className="p-2 w-50" 
            type="email"
            id="email" 
            name="email" 
            placeholder="Email" 
            value={email} 
            onChange={handleOnChange}
            required
          />

          <label htmlFor="password" className="form-label">Password</label>
          <input 
            className="p-2 w-50" 
            type="password"
            id="password" 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={handleOnChange}
            required
          />

          <label htmlFor="phone" className="form-label">Phone</label>
          <input 
            className="p-2 w-50" 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Phone Number"
            value={phone} 
            onChange={handleOnChange}
            required
          />

          <button type="submit" className="btn btn-primary w-50 text-center my-2">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingupComponent;
