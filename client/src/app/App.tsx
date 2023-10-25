import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Glossary } from '../pages/glossary/Glossary';
import { IGlossary } from '../data/IGlossary';

function App() {
  const [state, setState] = useState<IGlossary[]>([]);

  const callBackendAPI = async () => {
    const response = await fetch('/glossary');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  useEffect(() => {
    callBackendAPI()
      .then(res => setState(res))
      .catch(err => console.log(err));
  }, [])
  console.log(state)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/glossary" element={<Glossary words={state} />} />
          <Route path="/semantic-graph" element={<div>graph</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
