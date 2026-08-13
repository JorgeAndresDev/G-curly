import Coil from "./Coil";

const SectionRule = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center gap-6 text-caramelo ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 md:w-28 bg-caramelo/40" />
      <Coil className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
      <span className="h-px w-16 md:w-28 bg-caramelo/40" />
    </div>
  );
};

export default SectionRule;
