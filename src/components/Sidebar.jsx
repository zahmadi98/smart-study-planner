import StepItem from "./StepItem";
import steps from "../Data/steps";

const Sidebar = () => {
  return (
    <div className="flex-[1] flex flex-col">
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