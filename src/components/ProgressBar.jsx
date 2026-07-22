const ProgressBar = ({ progress = 17 }) => {
  return (
    <div className="w-full hidden md:block">
      <div className="flex justify-between items-center mb-3">
        <span className="text-slate-300 text-sm font-medium">
          مرحله ۱ از ۶
        </span>

        <span className="text-emerald-300 text-sm font-semibold">
          فرم پیشرفت
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-emerald-950/40 overflow-hidden border border-emerald-900/40">
        <div
          className="h-full rounded-full bg-linear-to-r from-emerald-400 via-emerald-300 to-green-300 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;