import React from 'react';
import "./App.css"
import { useState } from 'react';
const App = () => {
  const [title, setTitle] = useState<string>("");
  
  return (
    <>
      <div className="todo">
        <div className="todo-container ">
          <h3 className='text-center mb-4'>Add todo</h3>
          <input type="text" className='form-control mb-2 p-3' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter todo' />
          <button type='button' className='btn btn-primary'> add todo</button>

        </div>
      </div>
    </>
  );
};

export default App;