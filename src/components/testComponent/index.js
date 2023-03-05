// import React from "react";
import { useState } from 'react';
import SubSomeComp from '../subTestComp'

const SomeComponent = () => {
  const [ result, setResult ] = useState([]);
  const [ obj, setObj ] = useState({
    name: '',
    surname: '',
    age: '',
    citizen: '',
  });

  const onClick = (event) => {
    event.preventDefault();
    const res = [...result];
    for (const elem of event.target) {
      if (obj[elem.name]) {
        res.push(obj[elem.name]);
        // setResult(res => [...res, obj[elem.name]]);
      }
    }
    setResult(res);
  }

  const onChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setObj({ ...obj, [key]: value })
  }

  return (
    <div className="fdsfn-fdsfs">
      <form onSubmit={onClick}>
        <input type="text" name='name' onChange={onChange}/>
        <input type="text" name='surname' onChange={onChange}/>
        <input type="text" name='age' onChange={onChange}/>
        <input type="text" name='citizen' onChange={onChange}/>
        <button type="submit">Click</button>
      </form>
      <SubSomeComp res={result} />
    </div>
  )
}

export default SomeComponent;