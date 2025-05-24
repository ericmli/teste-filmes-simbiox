import { createContext, useState, useEffect, type ReactNode } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

// Define theme types
type ThemeMode = "light" | "dark"

interface ThemeContextType {
  theme: ThemeMode
  toggleTheme: () => void
}

// Create context
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
})

// Define theme objects
const lightTheme = {
  primary: "#e50914",
  primaryHover: "#b81d24",
  background: "#f5f5f5",
  backgroundHover: "#e9e9e9",
  cardBackground: "#ffffff",
  text: "#333333",
  textSecondary: "#666666",
  border: "#dddddd",
  inputBackground: "#ffffff",
}

const darkTheme = {
  primary: "#e50914",
  primaryHover: "#b81d24",
  background: "#121212",
  backgroundHover: "#1f1f1f",
  cardBackground: "#1f1f1f",
  text: "#ffffff",
  textSecondary: "#aaaaaa",
  border: "#333333",
  inputBackground: "#2a2a2a",
}

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize theme from localStorage if available, otherwise use system preference
  const [theme, setTheme] = useState<ThemeMode>("light")

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as ThemeMode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  // Select the current theme object
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
