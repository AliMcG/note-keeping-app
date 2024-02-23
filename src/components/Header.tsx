import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AuthenticationButton from "./AuthenticationButton";


export default function Header() {
  return (
    <header className="bg-[#75988c] flex justify-between fixed top-0 w-full p-2 font-bold">
      <h1 className="text-4xl flex items-center ml-4 gap-4 font-mono">
        <EmojiObjectsIcon className="text-yellow-100"/>
        Note Keeping App
      </h1>
      <AuthenticationButton />
    </header>
  );
}