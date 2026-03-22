// Export all design system components
export * from './colors/theme';

// Re-export TextComponent with explicit naming to avoid conflicts
export {
    TextComponent,
    TextComponentProps,
    TypographyProps,
    TextAlign,
    TypographyVariant,
    DisplayScale,
    HeadingScale,
    SubheadingScale,
    ParagraphScale,
    LabelScale,
    TypographyScale,
    ColorValue,
    resolveColor
} from './components/textComponent/index';

// Re-export color types with different names to avoid conflicts
export type {
    ColorKey as DesignSystemColorKey,
    ColorShade as DesignSystemColorShade
} from './components/textComponent/index';
