import React from "react";

interface CustomButtonProps {
  color: string;
  content: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  content,
  size,
  onClick,
}) => {
  let sizeClass = "";
  if (size === "small") {
    sizeClass = "px-2 py-1";
  } else if (size === "medium") {
    sizeClass = "px-4 py-2";
  } else if (size === "large") {
    sizeClass = "px-6 py-3";
  }

  const buttonStyles = `bg-${color} hover:bg-${color}-700 text-white rounded ${sizeClass}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {content}
    </button>
  );
};

export default CustomButton;
