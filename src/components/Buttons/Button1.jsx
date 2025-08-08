import React from "react";
import "./Button1.css";

const Button1 = ({ children = "Click Me", onClick }) => {
  // ripple effect handler
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const circle = document.createElement("span");

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.className = "ripple";

    // Remove old ripple if exists
    const oldRipple = btn.getElementsByClassName("ripple")[0];
    if (oldRipple) oldRipple.remove();

    btn.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 700);

    if (onClick) onClick(e);
  };

  return (
    <button className="btn1" onClick={handleRipple}>
      {children}
    </button>
  );
};

export default Button1;
