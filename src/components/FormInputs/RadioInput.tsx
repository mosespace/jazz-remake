import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RadioInput({
  title,
  optionsaArr,
  register,
  name,
}: {
  title: string;
  optionsaArr: any;
  register: any;
  name: string;
}) {
  return (
    <div>
      <h2 className="mb-2">{title}</h2>
      <RadioGroup defaultValue={optionsaArr[0].value}>
        {optionsaArr.map((option: any, i: number) => {
          return (
            <div key={i} className="flex items-center space-x-2">
              <RadioGroupItem
                {...register(`${name}`)}
                value={option.value}
                id={option.value}
              />
              <Label htmlFor={option.value}>{option.label}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}
