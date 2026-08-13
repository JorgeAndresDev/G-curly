import { useMemo } from "react";
import { GRADIENT_COLORS } from "../../lib/constants";
import Coil from "./Coil";

const presets = {
  primary: [GRADIENT_COLORS.caramelo, GRADIENT_COLORS.mango],
  secondary: [GRADIENT_COLORS.moca, GRADIENT_COLORS.cacao],
  accent: [GRADIENT_COLORS.arena, GRADIENT_COLORS.crema],
  dark: [GRADIENT_COLORS.cacao, GRADIENT_COLORS.moca],
  product1: [GRADIENT_COLORS.caramelo, GRADIENT_COLORS.mango],
  product2: [GRADIENT_COLORS.mango, GRADIENT_COLORS.caramelo],
  product3: [GRADIENT_COLORS.moca, GRADIENT_COLORS.cacao],
};

const GradientPlaceholder = ({
  preset = "primary",
  className = "",
  label,
  aspectRatio = "aspect-[4/3]",
}) => {
  const gradient = useMemo(() => {
    const [from, to] = presets[preset] || presets.primary;
    return `linear-gradient(135deg, ${from}, ${to})`;
  }, [preset]);

  const lightMotif = preset === "accent";

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <Coil
          className={`w-1/3 max-w-[7rem] ${
            lightMotif ? "text-cacao/20" : "text-crema/40"
          }`}
          strokeWidth={1.5}
        />
        {label && (
          <span
            className={`text-xs md:text-sm font-bold uppercase tracking-widest ${
              lightMotif ? "text-cacao/60" : "text-crema/80"
            }`}
          >
            {label}
          </span>
        )}
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_70%)]"
        aria-hidden="true"
      />
    </div>
  );
};

export default GradientPlaceholder;
