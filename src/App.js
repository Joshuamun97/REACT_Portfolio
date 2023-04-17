import React from "react";
import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Navigate to="/REACT_Portfolio" />} />
                    <Route path="REACT_Portfolio" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>;
        </>
    );
}