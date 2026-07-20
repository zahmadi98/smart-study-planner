const StepItem = ({ step, isLast }) => {
  return (
    <div className="flex items-start gap-4 pt-2">
        <div className="flex flex-col items-center">
            <div
                className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    font-semibold text-sm
                    
                    ${
                    step.active
                        ? "bg-emerald-400 text-slate-900 shadow-[0_0_20px_rgba(52,211,153,0.45)]" 
                        : "border border-slate-600 text-slate-400"
                    }
                `}
                >
                {step.id}
            </div>

            {!isLast && (
            <div
                className={`w-0.5 h-10 mt-1  ${
                step.active ? "bg-emerald-300/50 shadow-[0_0_10px_rgba(52,211,153,0.6)]" : "bg-slate-700"
                }`}
            ></div>
            )}

        </div>

        <div>
            <h3 className="font-semibold text-slate-100">
                {step.title}
            </h3>

            <p className="text-sm text-slate-500">
                {step.description}
            </p>
        </div>
    </div>
  );
};

export default StepItem;