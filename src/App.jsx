import { useState } from 'react';
import MagicNumber from './components/magicNumber'; // Component names should start with an uppercase letter
import './App.css';

function App() {
  return (
    <>
      <h1>Hello </h1>
      <MagicNumber /> {/* Corrected component name */}
    </>
  );
}

export default App;
