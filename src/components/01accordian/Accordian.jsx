import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndex = cpyMultiple.indexOf(getCurrentId);
    if (findIndex === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndex, 1);
    setMultiple(cpyMultiple);
  };
 

  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content"> {dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content"> {dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
