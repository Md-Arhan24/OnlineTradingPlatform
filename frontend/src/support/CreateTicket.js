import React, { Component } from "react";
function CreateTicket({ name, l1, l2, l3, l4, l5,icon }) {
  return (
    <div className="container">
      <div class="dropdown-center row p-2">
        
        <button
          class="btn btn-secondary dropdown-toggle text-start p-3 ml-2"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class={icon} style={{marginRight:"10px"}}></i>
          {name}
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              {l1}
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              {l2}
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              {l3}
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              {l4}
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              {l5}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreateTicket;
