import React from 'react';
import './App.scss';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects'
import Contacts from '../Contacts/Contacts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
