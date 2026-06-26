const Section = ({ children, className = "", id, dark = false }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        dark
          ? "bg-primary text-accent dark:bg-deep-green"
          : "bg-accent text-dark dark:bg-dark dark:text-accent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;