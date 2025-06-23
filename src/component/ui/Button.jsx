import clsx from "clsx";

const Button = ({
  text = "¡Sí, me comprometo!",
  bg = "bg-gradient-to-r from-purple-500 to-pink-500",
  textColor = "",
  icon: Icon = null,
  iconPosition = "", // or "left"
  className = "",
  fontSize = "text-base",      // 👈 Tailwind font size
  fontWeight = "font-semibold",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full",
        "font-semibold text-base whitespace-nowrap transition-all duration-300",
        bg,
        textColor,
        fontSize,
        fontWeight,
        className
      )}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
      {iconPosition === "right" && Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
