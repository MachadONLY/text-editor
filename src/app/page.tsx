import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import TextEditor from "./Components/TextEditor/TextEditor";

export default function Main() {
  return (
   <>
   <Navbar/>
   <Home/>
   <TextEditor/>
   </>
  );
}
