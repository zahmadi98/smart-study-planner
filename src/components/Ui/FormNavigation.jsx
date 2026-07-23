import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const FormNavigation = ({ onNext, onPrev }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse md:justify-between">
      
      <button
        type="button"
        onClick={onNext}
        className="
          order-1 md:order-2
          w-full md:w-44
          h-11
          rounded-xl
          bg-emerald-600
          text-white
          font-medium
          transition
          hover:bg-emerald-400
          active:bg-emerald-700
          active:scale-95
          shadow-lg shadow-emerald-500/10
          flex items-center justify-center gap-2
        "
      >
        <FiArrowRight />
        بعدی
      </button>
      
      <button
        type="button"
        onClick={onPrev}
        className="
          order-2 md:order-1
          w-full md:w-36
          h-11
          rounded-xl
          border-emerald-900/40 
          bg-[#16231F]
          text-slate-200
          font-medium
          transition
          hover:bg-slate-800
          active:bg-slate-700
          active:scale-95
          flex items-center justify-center gap-2
        "
      >
        
        قبلی
        <FiArrowLeft />
      </button>

      
    </div>
  );
};

export default FormNavigation;