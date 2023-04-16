import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <BrowserRouter>
            <Layout />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}