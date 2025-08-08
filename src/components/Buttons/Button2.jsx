import React from "react";
import "./button1.css";

const Button2 = ({ children = "Click Me", onClick }) => {
  const handleRipple = (e) => {
    const button = e.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    // আগের ripple থাকলে মুছে দিচ্ছি
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    if (onClick) onClick(e);
  };

  return (
    <button className="btn1" onClick={handleRipple}>
      {children}
    </button>
  );
};

export default Button2;
