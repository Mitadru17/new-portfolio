"use client"

import * as React from "react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  const Icon = () => (
    <svg
      key={theme}
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="transition-transform duration-500 ease-in-out"
      style={{ transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <mask id="moon-mask">
        <rect x="0" y="0" width="20" height="20" fill="white" />
        <circle cx="10" cy="2" r="8" fill="black" 
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: theme === 'dark' ? 'translateX(0px)' : 'translateX(-12px)' }}
        />
      </mask>
      <circle
        cx="10"
        cy="10"
        r="8"
        fill="currentColor"
        mask="url(#moon-mask)"
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: theme === 'dark' ? 'scale(0.7)' : 'scale(1)' }}
      />
      <g>
        <path
          d="M 10 0 A 10 10 0 0 1 10 20 Z"
          fill="currentColor"
          className="transition-transform origin-center duration-500 ease-in-out"
          style={{ transform: theme === 'dark' ? 'scale(0)' : 'scale(1) rotate(0deg)' }}
        />
         <path
          d="M 10 0 A 10 10 0 0 1 10 20 Z"
          fill="currentColor"
          className="transition-transform origin-center duration-500 ease-in-out"
          style={{ transform: theme === 'dark' ? 'scale(0)' : 'scale(1) rotate(45deg)' }}
        />
         <path
          d="M 10 0 A 10 10 0 0 1 10 20 Z"
          fill="currentColor"
          className="transition-transform origin-center duration-500 ease-in-out"
          style={{ transform: theme === 'dark' ? 'scale(0)' : 'scale(1) rotate(90deg)' }}
        />
         <path
          d="M 10 0 A 10 10 0 0 1 10 20 Z"
          fill="currentColor"
          className="transition-transform origin-center duration-500 ease-in-out"
          style={{ transform: theme === 'dark' ? 'scale(0)' : 'scale(1) rotate(135deg)' }}
        />
      </g>
    </svg>
  );

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      <Icon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
