import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-secondary text-white hover:bg-terracotta border-transparent",
  outline:
    "bg-transparent border-2 border-current text-current hover:bg-current hover:text-dark",
  ghost: "bg-transparent text-current hover:bg-white/10 border-transparent",
  solid: "bg-primary text-white hover:bg-dark border-transparent",
};

const sizes = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;