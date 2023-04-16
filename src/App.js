import React from "react";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
        <Layout />
            <Routes>
                    <Route path='/REACT_Portfolio' element={<Home />} />
                    <Route path="REACT_Portfolio/about" element={<About />} />
                    <Route path="REACT_Portfolio/contact" element={<Contact />} />
                </Routes>;
        </>
    );
}