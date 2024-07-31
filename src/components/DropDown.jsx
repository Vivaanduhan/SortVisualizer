import React, { useState } from "react";

export const DropDown = ({ defaultValue, handleChange, list = [] }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChangeEvent = (e) => {
    // console.log("here",e.target.value);
    setValue(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <select
      id="algorithm"
      class="w-full p-2 text-white bg-transparent outline-none rounded-md border border-border focus:outline-none"
      value={value}
      onChange={handleChangeEvent}
    >
      {list.map((item) => {
        return (
          <option value={item} key={item} >
            {item}
          </option>
        );
      })}
    </select>
  );
};
