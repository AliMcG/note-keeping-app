import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="sticky top-[110vh] md:fixed md:bottom-5 md:top-0 flex w-full flex-1 justify-center">
      <p className="text-white">Copyright © {year}</p>
    </footer>
  );
}
