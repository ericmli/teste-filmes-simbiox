import { useContext } from "react"
import { Moon, Sun } from "lucide-react"
import { ThemeContext } from "../../theme"
import { ToggleButton } from "./styles"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </ToggleButton>
  )
}
