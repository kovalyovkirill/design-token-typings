/**
 * Spacing values from 2 to 64 with step 2
 */
export type TSpacing = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 | 52 | 54 | 56 | 58 | 60 | 62 | 64;

/**
 * Margin props for components
 */
export type TMargin = {
    margin?: TSpacing;
    marginTop?: TSpacing;
    marginRight?: TSpacing;
    marginBottom?: TSpacing;
    marginLeft?: TSpacing;
};

/**
 * Padding props for components
 */
export type TPadding = {
    padding?: TSpacing;
    paddingTop?: TSpacing;
    paddingRight?: TSpacing;
    paddingBottom?: TSpacing;
    paddingLeft?: TSpacing;
};

/**
 * Gap props for flex/grid containers
 */
export type TGap = {
    gap?: TSpacing;
    rowGap?: TSpacing;
    columnGap?: TSpacing;
};

