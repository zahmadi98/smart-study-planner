import React from "react";
import { FiChevronDown } from "react-icons/fi";

const SelectField = ({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="flex items-center gap-2 mb-2 text-xs md:text-sm font-medium text-slate-300"
      >
        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-sm md:text-lg" />

        <FiChevronDown className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm md:text-base pointer-events-none" />
        
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full text-sm md:text-base appearance-none h-10 md:h-12 rounded-md md:rounded-xl border border-emerald-900/40 bg-[#16231F]  pr-10 md:pr-12
          pl-8 md:pl-10 text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        >
          <option value="">انتخاب کنید</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;