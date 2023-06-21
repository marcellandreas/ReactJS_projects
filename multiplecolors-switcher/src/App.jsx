import { useEffect } from "react";
import ColorItem from "./components/colorItem";

import { IoMdSettings } from "react-icons/io";

function App() {
  const color = [
    "#2d3436",
    "#4834d4",
    "#be2edd",
    "#f9ca24",
    "#6ab04c",
    "#30336b",
  ];

  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    console.log(currentColor);
    setTheme(currentColor);
  });

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");
    setTheme(currentColor);
    console.log(currentColor);
    localStorage.setItem("color", currentColor);
  };
  return (
    <div>
      <div className="color-switcher">
        <button>
          <IoMdSettings />
        </button>
        <h1 className="heading">Select Color</h1>
        <div className="color-list">
          {color.map((color, i) => (
            <ColorItem setColor={setColor} key={i} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
