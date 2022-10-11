import "./App.css";
import React, { Component } from "react";
import {Outlet } from "react-router-dom";

class StudentManagement extends Component {

  render() {
    return (
      <div className="App">
        <div className="m-3">
              <Outlet />
            </div>
          </div>
      
    );
  }
}
export default StudentManagement;
