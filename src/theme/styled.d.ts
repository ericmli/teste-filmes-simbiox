import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string
    primaryHover: string
    background: string
    backgroundHover: string
    cardBackground: string
    text: string
    textSecondary: string
    border: string
    inputBackground: string
  }
}
