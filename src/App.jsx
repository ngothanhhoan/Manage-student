/** @format */

import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import Home from "./router/Home";
import Studentt from "./router/Studentt";
import Room from "./router/Room";
import Calendar from "./router/Calendar";
import Login from "./router/Login";
import SignUp from "./router/SignUp";
import Class from "./router/Class";
import Student from "./router/Student";
import Subject from "./router/Subject";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/studentt' element={<Studentt />} />
        <Route path='/room' element={<Room />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/class' element={<Class />} />
        <Route path='/student' element={<Student />} />
        <Route path='/subject' element={<Subject />} />
      </Routes>
    </>
  );
}

export default App;
