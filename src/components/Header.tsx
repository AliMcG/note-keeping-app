import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AuthenticationButton from "./AuthenticationButton";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full justify-between bg-[#75988c] p-2 font-bold">
      <h1 className="ml- flex items-center gap-4 font-monts text-lg md:text-2xl lg:text-3xl">
        <EmojiObjectsIcon className="h-10 w-10 text-yellow-100" />
        Note Keeping App
      </h1>
      <AuthenticationButton />
    </header>
  );
}
