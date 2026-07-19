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
        className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-300"
      >
        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

        <FiChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full appearance-none h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
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