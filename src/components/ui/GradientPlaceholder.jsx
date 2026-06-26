import { useMemo } from "react";
import { GRADIENT_COLORS } from "../../lib/constants";

const presets = {
  primary: [GRADIENT_COLORS.primary, GRADIENT_COLORS.dark],
  secondary: [GRADIENT_COLORS.secondary, GRADIENT_COLORS.terracotta],
  accent: [GRADIENT_COLORS.accent, "#E0D5C5"],
  dark: [GRADIENT_COLORS.deepGreen, "#0a1f0a"],
  product1: ["#386641", "#A65640"],
  product2: ["#AA8F59", "#C9A96E"],
  product3: ["#6B8E5A", "#4A7C59"],
};

const GradientPlaceholder = ({
  preset = "primary",
  className = "",
  icon,
  label,
  aspectRatio = "aspect-[4/3]",
}) => {
  const gradient = useMemo(() => {
    const [from, to] = presets[preset] || presets.primary;
    const angle = Math.abs(preset.length * 45) % 360;
    return `linear-gradient(${angle}deg, ${from}, ${to})`;
  }, [preset]);

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
        {icon && <div className="text-4xl md:text-6xl mb-2">{icon}</div>}
        {label && (
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60">
            {label}
          </span>
        )}
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_70%)]"
        aria-hidden="true"
      />
    </div>
  );
};

export default GradientPlaceholder;