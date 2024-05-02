import React from "react";
import Editor from "../Editor";

const TextEditor = () => {
  return (
    <div className="min-h-screen text-zinc-900 bg-zinc-900 p-8">
      <div className="overflow-hidden grid grid-cols-[1fr_16rem] lg:grid-cols-[16rem_1fr]  bg-zinc-50 mx-auto max-w-[1080px] w-full rounded-xl min-h-[700px] shadow-xl border-x-2  border-red-600">
        <aside className="bg-zinc-100 border-r-zinc-950 h-full p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></button>
          </div>
        </aside>

        <main className="p-4">
           <Editor/>
        </main>
      </div>
    </div>
  );
};

export default TextEditor;
