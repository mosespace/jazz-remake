"use client";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

type Option = {
  value: string;
  label: string;
};
type MultiSelectProps = {
  options: Option[];
  title: string;
  selected: any;
  setSelected: any;
};
const MultiSelectInput = ({
  options,
  title,
  selected,
  setSelected,
}: MultiSelectProps) => {
  return (
    <div className='text-slate-800 dark:text-slate-100'>
      <h1>{title}</h1>
      <div className='flex gap-2 flex-wrap py-2'>
        {selected.map((item: Option, i: number) => {
          return (
            <button
              type='button'
              className='bg-slate-600 rounded text-slate-100 py-2 px-3'
              key={i}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <MultiSelect
        className='text-slate-800 dark:text-slate-100'
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy='Select'
      />
    </div>
  );
};

export default MultiSelectInput;
