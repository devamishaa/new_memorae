import clsx from "clsx";

const Pill = ({
  text = "MEMORAE",
  icon = null,
  className = "",
  textColor = "#557BF4",
  backgroundColor = "bg-[#557BF41A]",
  ...props
}) => {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 px-3 py-1 rounded-[6px] text-[11px] text-sm w-auto",
        backgroundColor,
        className
      )}
      style={{ width: "fit-content" }}
      {...props}
    >
      {icon && (
        <span className="w-5 h-5 flex items-center justify-center shrink-0">
          <img
            src={icon}
            alt="icon"
            className="w-full h-full object-cover rounded-full"
          />
        </span>
      )}
      <span style={{ color: textColor }}>{text}</span>
    </div>
  );
};

export default Pill;
