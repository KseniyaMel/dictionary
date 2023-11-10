import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Glossary } from '../pages/glossary/Glossary';
import { MindMap } from '../pages/mindMap/MindMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/semantic-graph" element={<MindMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
