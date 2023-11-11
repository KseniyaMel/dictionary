import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import Glossary from '../pages/glossary';
import MindMap from '../pages/mindMap';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="glossary" element={<Glossary />} />
          <Route path="semantic-graph" element={<MindMap />} />
          <Route
            path="*"
            element={<Navigate to="glossary" />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
