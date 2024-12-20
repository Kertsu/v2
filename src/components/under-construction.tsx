import { SlSettings } from "react-icons/sl";

const UnderConstruction = ({ section }: { section: string }) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <SlSettings className="animate-[spin_5s_linear_infinite] text-7xl"/>
      <p className="text-center">
        {section} section is currently under construction. Please check back
        later.
      </p>
    </div>
  );
};

export default UnderConstruction;
