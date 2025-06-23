import { useState } from "react";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";

const TextInput = ({
  type = "text",
  placeholder = "Nombre",
  value,
  onChange,
  icon: Icon = null,
  iconPosition = "left",
  className = "",
  inputClassName = "",
  // ✅ don't destructure children at all
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div
      className={clsx(
        "w-full bg-white shadow-sm rounded-[8px] border border-gray-200 px-4 py-3",
        "flex items-center gap-3",
        className
      )}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5 text-gray-500" />}
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          "w-full text-lg outline-none text-gray-700 placeholder-[#717680] bg-transparent",
          inputClassName
        )}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-gray-500 focus:outline-none"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      )}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 text-gray-500" />}
    </div>
  );
};

export default TextInput;
