import React, { useState } from 'react';

const HelloWorld = (props) => {
  const [msj, setMsj] = useState('');

  const handleClick = () => {
    setMsj('(from changed state)');
  }

  return (
    <>
      <h1>Hello {props.name} {msj}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default HelloWorld;