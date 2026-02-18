import FormAdd from "./FormAdd";

function ResearchAdd({ className }: { className?: string }) {
  return (
    <div className={`min-w-xs mr-[10px] ${className ?? ""}`}>
      <div className="flex items-center text-xl justify-center h-14 mx-1 my-1 px-3 rounded-md bg-[#470000] text-white">
        Add Research
      </div>
      <div className="mx-1 my-1">
        <FormAdd />
      </div>
    </div>
  );
}

export default ResearchAdd;
