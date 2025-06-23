import clsx from "clsx";

const ChatBubble = ({
  children,
  arrow = "bottom", // 'top' | 'bottom' | 'left' | 'right'
  className = "",
  contentClassName = "",
}) => {
  const arrowStyles = {
    top: "after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-b-[12px] after:border-x-[10px] after:border-t-0 after:border-solid after:border-transparent after:border-b-[#f2f3fe]",
    bottom: "after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-[12px] after:border-x-[10px] after:border-b-0 after:border-solid after:border-transparent after:border-t-[#f2f3fe]",
    left: "after:top-1/2 after:right-full after:-translate-y-1/2 after:border-r-[12px] after:border-y-[10px] after:border-l-0 after:border-solid after:border-transparent after:border-r-[#f2f3fe]",
    right: "after:top-1/2 after:left-full after:-translate-y-1/2 after:border-l-[12px] after:border-y-[10px] after:border-r-0 after:border-solid after:border-transparent after:border-l-[#f2f3fe]",
  };

  return (
    <div
      className={clsx(
        "relative w-fit max-w-[100%] bg-[#F3F3FE] text-[#001D4A] text-lg font-semibold px-6 py-4 rounded-[12px]",
        "after:content-[''] after:absolute",
        arrowStyles[arrow],
        className
      )}
    >
      <div className={clsx("flex flex-col gap-2", contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default ChatBubble;
