import React from "react";
import { ColorScheme, darkColors, lightColors } from "./Color";

class Theme {
    private lightColorScheme: ColorScheme;
    private darkColorScheme: ColorScheme;
    private isDark: boolean;

    constructor(lightColorScheme: ColorScheme, darkColorScheme: ColorScheme, isDark: boolean) {
        this.lightColorScheme = lightColorScheme;
        this.darkColorScheme = darkColorScheme;
        this.isDark = isDark;
    }

    public get colorScheme(): ColorScheme {
        return this.isDark ? this.darkColorScheme : this.lightColorScheme;
    }
}

const defaultTheme = new Theme(lightColors, darkColors, true);

const ThemeContext = React.createContext<Theme>(defaultTheme);

export type { Theme };
export { defaultTheme };
export default ThemeContext;