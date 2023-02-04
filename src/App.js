import React from 'react';
import Form from './components/Form';
import Header from './components/Header'
import Notes from './components/Notes';
function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Form />
      <Notes/>
    </div>
  );
}

export default App;


