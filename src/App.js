import React from 'react';
const electron = window.require('electron');

function App() {
  return (
    <>
      <h1>ola mundo</h1>
      <button onClick={() => {
        electron.remote.app.quit();
      }}>close window</button>
    </>
  );
}

export default App;
