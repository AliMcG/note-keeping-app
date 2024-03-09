import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AuthenticationButton from "./AuthenticationButton";


export default function Header() {
  return (
    <header className="bg-[#75988c] flex justify-between fixed top-0 w-full p-2 font-bold">
      <h1 className="text-lg md:text-2xl lg:text-3xl flex items-center ml- gap-4 font-monts">
        <EmojiObjectsIcon className="text-yellow-100 h-10 w-10"/>
        Note Keeping App
      </h1>
      <AuthenticationButton />
    </header>
  );
}