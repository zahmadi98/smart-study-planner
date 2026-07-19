import React from "react";

const InputField = ({
  id,
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-slate-300"
      >
        <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 ml-2"></span>
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg" />

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-12 rounded-xl border border-emerald-900/40 bg-[#16231F] pr-12 pl-4 text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>
    </div>
  );
};

export default InputField;