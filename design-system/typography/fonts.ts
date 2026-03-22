export type FontFamily = 'Satoshi' | 'SF Mono' | 'system-ui';

export type FontWeight = 300 | 400 | 500 | 700 | 900;

export type FontSize =
  | 'label2'   // 10px
  | 'label1'   // 12px
  | 'paragraph2' // 14px
  | 'paragraph1' // 16px
  | 'subheading2' // 18px
  | 'subheading1' // 20px
  | 'heading4' // 24px
  | 'heading3' // 28px
  | 'heading2' // 32px
  | 'heading1' // 40px
  | 'display3' // 48px
  | 'display2' // 56px
  | 'display1'; // 48px (same as display3)

export type LineHeight =
  | 'none'      // 1
  | 'tight'     // 1.25
  | 'snug'      // 1.375
  | 'normal'    // 1.5
  | 'relaxed'   // 1.625
  | 'loose';    // 2

export type LetterSpacing =
  | 'tighter'   // -0.05em
  | 'tight'     // -0.025em
  | 'normal'    // 0em
  | 'wide'      // 0.025em
  | 'wider'     // 0.05em
  | 'widest';   // 0.1em

export interface TypographyProps {
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  italic?: boolean;
}

export interface TypographyStyle {
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  italic?: boolean;
  uppercase?: boolean;
}

export const fontSizes: Record<FontSize, string> = {
  label2: '0.625rem',      // 10px
  label1: '0.75rem',      // 12px
  paragraph2: '0.875rem',  // 14px
  paragraph1: '1rem',      // 16px
  subheading2: '1.125rem', // 18px
  subheading1: '1.25rem',  // 20px
  heading4: '1.5rem',     // 24px
  heading3: '1.75rem',    // 28px
  heading2: '2rem',       // 32px
  heading1: '2.5rem',     // 40px
  display3: '3rem',       // 48px
  display2: '3.5rem',     // 56px
  display1: '3rem',       // 48px (same as display3)
};

export const lineHeights: Record<LineHeight, string> = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

export const letterSpacings: Record<LetterSpacing, string> = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const fontWeights: Record<FontWeight, string> = {
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  700: 'Bold',
  900: 'Black',
};

// Predefined typography scales
export const typographyScale = {
  display: {
    display1: {
      fontSize: 'display1' as FontSize,
      fontWeight: 900 as FontWeight,
      lineHeight: 'tight' as LineHeight,
      letterSpacing: 'tight' as LetterSpacing,
    },
    display2: {
      fontSize: 'display2' as FontSize,
      fontWeight: 900 as FontWeight,
      lineHeight: 'tight' as LineHeight,
      letterSpacing: 'tight' as LetterSpacing,
    },
    display3: {
      fontSize: 'display3' as FontSize,
      fontWeight: 900 as FontWeight,
      lineHeight: 'tight' as LineHeight,
      letterSpacing: 'tight' as LetterSpacing,
    },
  },
  heading: {
    heading1: {
      fontSize: 'heading1' as FontSize,
      fontWeight: 700 as FontWeight,
      lineHeight: 'tight' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
    heading2: {
      fontSize: 'heading2' as FontSize,
      fontWeight: 700 as FontWeight,
      lineHeight: 'tight' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
    heading3: {
      fontSize: 'heading3' as FontSize,
      fontWeight: 700 as FontWeight,
      lineHeight: 'snug' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
    heading4: {
      fontSize: 'heading4' as FontSize,
      fontWeight: 700 as FontWeight,
      lineHeight: 'snug' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
  },
  subheading: {
    subheading1: {
      fontSize: 'subheading1' as FontSize,
      fontWeight: 700 as FontWeight,
      lineHeight: 'normal' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
    subheading2: {
      fontSize: 'subheading2' as FontSize,
      fontWeight: 700 as FontWeight,
      lineHeight: 'normal' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
  },
  paragraph: {
    paragraph1: {
      fontSize: 'paragraph1' as FontSize,
      fontWeight: 400 as FontWeight,
      lineHeight: 'normal' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
    paragraph2: {
      fontSize: 'paragraph2' as FontSize,
      fontWeight: 400 as FontWeight,
      lineHeight: 'normal' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
  },
  label: {
    label1: {
      fontSize: 'label1' as FontSize,
      fontWeight: 400 as FontWeight,
      lineHeight: 'normal' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
    label2: {
      fontSize: 'label2' as FontSize,
      fontWeight: 400 as FontWeight,
      lineHeight: 'normal' as LineHeight,
      letterSpacing: 'normal' as LetterSpacing,
    },
  },
} as const;

export type TypographyScaleKey = keyof typeof typographyScale;
export type DisplayKey = keyof typeof typographyScale.display;
export type HeadingKey = keyof typeof typographyScale.heading;
export type SubheadingKey = keyof typeof typographyScale.subheading;
export type ParagraphKey = keyof typeof typographyScale.paragraph;
export type LabelKey = keyof typeof typographyScale.label;
