import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="contianer px-3">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid py-1">
          <Link class="navbar-brand" to={"/"}>
            <img
              src="media/logo.svg"
              alt="Logo"
              height="24"
              class="d-inline-block align-text-top"
              className="img-fluid  ml-5"
              style={{width:"125px",marginLeft:"10%"}}
            />
          </Link>
          <div className="d-flex justify-content-between align-items-center " style={{width:"35%"}}>
            <Link to={"/signup"} className="anchor ">Singup</Link>
            <Link to="/about" className="anchor">About</Link>

            <Link to="/products" className="anchor">Products</Link>

            <Link to="/pricing" className="anchor">Pricing</Link>

            <Link to="/support" className="anchor">Support</Link>
            <a href="#"><i class="fa-solid fa-bars"></i></a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
