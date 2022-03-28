import React, { useState } from 'react';
import '../../style.css';
import InputOutput from './InputOutput/InputOutput';
import Sidebar from './Sidebar/Sidebar';
import Local from '../../services/Persistence';

let count = 0;

export default function ColorList() {
  const list = Local.load()? Local.load() : [];
  const [all, setAll] = useState(list);
  const [text, setText] = useState(''); 
  const [color, setColor] = useState('black');

  function itemClicked(e, newText, newColor, index) {
    setText(newText);
    setColor(newColor);
    let newAll = all.filter((item) => item.index != index);
    setAll(newAll);
  }

  function savePressed(newText, newColor) {
    const textStyles = {
      color: newColor,
      top: '50px',
      display: 'block',
    };

    const index = all.length.toString();
    
    let newAll = all.concat({ index, style: textStyles, text: newText });

    setAll(newAll);
    Local.save(newAll);
  }

  return (
    <div>
      <Sidebar all={all} itemClicked={itemClicked} /> 
      <InputOutput
        savePressed={savePressed}
        color={color}
        setColor={setColor}
        text={text}
        setText={setText}
      />
    </div>
  );
}
