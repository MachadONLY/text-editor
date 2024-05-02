"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "./InitialContent";

export interface EditorProps {}

export function Editor(props: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: InitialContent,
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-red"
        editor={editor}
      />
    </>
  );
}

export default Editor;
