import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-auto bg-zinc-950 fixed top-0 z-50">
      <div className="flex justify-between lg:justify-around items-center p-3">
        <h1 className="text-zinc-50 tracking-widest font-semibold text-sm">
          Gabriel Machado
        </h1>
        <h1 className="text-zinc-50 tracking-widest font-semibold text-sm">Text Editor</h1>
        <h1 className="text-zinc-50 tracking-widest font-semibold text-sm">2024</h1>
      </div>
    </div>
  );
};

export default Navbar;
