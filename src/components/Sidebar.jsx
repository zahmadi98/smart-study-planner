import StepItem from "./StepItem";
import steps from "../Data/steps";

const Sidebar = () => {
  return (
    <div className="md:flex-[1] flex md:flex-col justify-center md:justify-start overflow-x-auto">
        {steps.map((step, index) => (
            <StepItem
                key={step.id}
                step={step}
                isLast={index === steps.length - 1}
            />
        ))}
    </div>
  );
};

export default Sidebar;