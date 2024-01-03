const md_theme_light_primary = '#9B4507';
const md_theme_light_onPrimary = '#FFFFFF';
const md_theme_light_primaryContainer = '#FFDBCA';
const md_theme_light_onPrimaryContainer = '#341100';
const md_theme_light_secondary = '#4559A9';
const md_theme_light_onSecondary = '#FFFFFF';
const md_theme_light_secondaryContainer = '#DDE1FF';
const md_theme_light_onSecondaryContainer = '#001453';
const md_theme_light_tertiary = '#AD285F';
const md_theme_light_onTertiary = '#FFFFFF';
const md_theme_light_tertiaryContainer = '#FFD9E1';
const md_theme_light_onTertiaryContainer = '#3F001C';
const md_theme_light_error = '#BA1A1A';
const md_theme_light_errorContainer = '#FFDAD6';
const md_theme_light_onError = '#FFFFFF';
const md_theme_light_onErrorContainer = '#410002';
const md_theme_light_background = '#FFFBFF';
const md_theme_light_onBackground = '#311300';
const md_theme_light_surface = '#FFFBFF';
const md_theme_light_onSurface = '#311300';
const md_theme_light_surfaceVariant = '#F4DED4';
const md_theme_light_onSurfaceVariant = '#52443D';
const md_theme_light_outline = '#85736B';
const md_theme_light_inverseOnSurface = '#FFEDE4';
const md_theme_light_inverseSurface = '#512400';
const md_theme_light_inversePrimary = '#FFB690';
const md_theme_light_shadow = '#000000';
const md_theme_light_surfaceTint = '#9B4507';
const md_theme_light_outlineVariant = '#D7C2B9';
const md_theme_light_scrim = '#000000';

const md_theme_dark_primary = '#FFB690';
const md_theme_dark_onPrimary = '#542100';
const md_theme_dark_primaryContainer = '#783200';
const md_theme_dark_onPrimaryContainer = '#FFDBCA';
const md_theme_dark_secondary = '#B8C4FF';
const md_theme_dark_onSecondary = '#0F2878';
const md_theme_dark_secondaryContainer = '#2B4090';
const md_theme_dark_onSecondaryContainer = '#DDE1FF';
const md_theme_dark_tertiary = '#FFB1C6';
const md_theme_dark_onTertiary = '#650031';
const md_theme_dark_tertiaryContainer = '#8D0647';
const md_theme_dark_onTertiaryContainer = '#FFD9E1';
const md_theme_dark_error = '#FFB4AB';
const md_theme_dark_errorContainer = '#93000A';
const md_theme_dark_onError = '#690005';
const md_theme_dark_onErrorContainer = '#FFDAD6';
const md_theme_dark_background = '#311300';
const md_theme_dark_onBackground = '#FFDBC7';
const md_theme_dark_surface = '#311300';
const md_theme_dark_onSurface = '#FFDBC7';
const md_theme_dark_surfaceVariant = '#52443D';
const md_theme_dark_onSurfaceVariant = '#D7C2B9';
const md_theme_dark_outline = '#A08D84';
const md_theme_dark_inverseOnSurface = '#311300';
const md_theme_dark_inverseSurface = '#FFDBC7';
const md_theme_dark_inversePrimary = '#9B4507';
const md_theme_dark_shadow = '#000000';
const md_theme_dark_surfaceTint = '#FFB690';
const md_theme_dark_outlineVariant = '#52443D';
const md_theme_dark_scrim = '#000000';

const seed = '#F5894B';

interface ColorScheme {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    errorContainer: string;
    onError: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
}

const lightColors: ColorScheme = {
    primary: md_theme_light_primary,
    onPrimary: md_theme_light_onPrimary,
    primaryContainer: md_theme_light_primaryContainer,
    onPrimaryContainer: md_theme_light_onPrimaryContainer,
    secondary: md_theme_light_secondary,
    onSecondary: md_theme_light_onSecondary,
    secondaryContainer: md_theme_light_secondaryContainer,
    onSecondaryContainer: md_theme_light_onSecondaryContainer,
    tertiary: md_theme_light_tertiary,
    onTertiary: md_theme_light_onTertiary,
    tertiaryContainer: md_theme_light_tertiaryContainer,
    onTertiaryContainer: md_theme_light_onTertiaryContainer,
    error: md_theme_light_error,
    errorContainer: md_theme_light_errorContainer,
    onError: md_theme_light_onError,
    onErrorContainer: md_theme_light_onErrorContainer,
    background: md_theme_light_background,
    onBackground: md_theme_light_onBackground,
    surface: md_theme_light_surface,
    onSurface: md_theme_light_onSurface,
    surfaceVariant: md_theme_light_surfaceVariant,
    onSurfaceVariant: md_theme_light_onSurfaceVariant,
};

const darkColors: ColorScheme = {
    primary: md_theme_dark_primary,
    onPrimary: md_theme_dark_onPrimary,
    primaryContainer: md_theme_dark_primaryContainer,
    onPrimaryContainer: md_theme_dark_onPrimaryContainer,
    secondary: md_theme_dark_secondary,
    onSecondary: md_theme_dark_onSecondary,
    secondaryContainer: md_theme_dark_secondaryContainer,
    onSecondaryContainer: md_theme_dark_onSecondaryContainer,
    tertiary: md_theme_dark_tertiary,
    onTertiary: md_theme_dark_onTertiary,
    tertiaryContainer: md_theme_dark_tertiaryContainer,
    onTertiaryContainer: md_theme_dark_onTertiaryContainer,
    error: md_theme_dark_error,
    errorContainer: md_theme_dark_errorContainer,
    onError: md_theme_dark_onError,
    onErrorContainer: md_theme_dark_onErrorContainer,
    background: md_theme_dark_background,
    onBackground: md_theme_dark_onBackground,
    surface: md_theme_dark_surface,
    onSurface: md_theme_dark_onSurface,
    surfaceVariant: md_theme_dark_surfaceVariant,
    onSurfaceVariant: md_theme_dark_onSurfaceVariant,
};

export type { ColorScheme };
export { lightColors, darkColors };