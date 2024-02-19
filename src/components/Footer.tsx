import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p className="text-white">Copyright © {year}</p>
    </footer>
  )
}