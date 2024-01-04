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

    getBoxShadowFromElevation(elevation: number): string {
        const boxShadow = `0px ${elevation / 2}px ${elevation}px rgba(0, 0, 0, 0.3)`;
        return boxShadow;
    }
}

const defaultTheme = new Theme(lightColors, darkColors, true);

const ThemeContext = React.createContext<Theme>(defaultTheme);

export type { Theme };
export { defaultTheme };
export default ThemeContext;