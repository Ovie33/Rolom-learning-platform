import Typography from "./typography";

const Button = ({ color = "primary", variant = "solid", children }) => {
  const variantClasses = {
    primaryOutline: "rounded-lg text-sm border border-primary ",
    secondaryOutline: "rounded-lg text-sm border border-secondary",
    accentOutline: "rounded-lg text-sm border border-accent text-accent",
    primary: "rounded-lg text-sm bg-primary text-white",
    secondary: "rounded-lg text-sm bg-secondary text-white",
    accent: "rounded-lg text-sm bg-accent text-white",
  };

  const buttonClass = [
    "py-3 px-9 rounded-lg text-xs",
    variantClasses[variant],
  ].join(" ");

  return (
    <button className={buttonClass}>
      <Typography variant="body">{children}</Typography>
    </button>
  );
};

export default Button;
