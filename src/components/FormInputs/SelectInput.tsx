import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  value: string;
  label: string;
};
export function SelectInput({
  title,
  optionsArray,
  register,
  name,
  selected,
  setSelected,
  className = "w-[280px]",
}: {
  title: string;
  optionsArray: Option[];
  register: any;
  name: string;
  selected: string;
  setSelected: any;
  className: string;
}) {
  return (
    <div>
      <h2 className='mb-2'>{title}</h2>
      <Select
        {...register(`${name}`)}
        defaultValue={selected}
        onValueChange={(item) => setSelected(item)}
      >
        <SelectTrigger className={`${className}`}>
          <SelectValue placeholder='Select from Options here' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>North America</SelectLabel> */}
            {optionsArray.map((item, i: number) => {
              return (
                <SelectItem key={i} value={item.value}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
