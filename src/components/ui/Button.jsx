import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-caramelo text-crema hover:bg-mango border-transparent shadow-[0_14px_30px_-12px_rgba(201,116,47,0.55)]",
  solid: "bg-cacao text-crema hover:bg-moca border-transparent",
  outline: "bg-transparent border-2 border-current text-current",
  ghost: "bg-transparent text-current border-transparent",
};

const sizes = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
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
    "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramelo focus-visible:ring-offset-2 focus-visible:ring-offset-arena shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-[0.98]";

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
