import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="fixed bottom-5">
      <p className="text-white">Copyright © {year}</p>
    </footer>
  )
}