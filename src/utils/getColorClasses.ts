import { TColor } from '../types/colors';

/**
 * Utility function to generate CSS class names for color tokens
 * @param color - Color token from TColor type
 * @param prefix - Optional prefix for the CSS class (default: 'color')
 * @returns CSS class name string or undefined if no color provided
 */
export const getColorClasses = (
    color?: TColor,
    prefix: 'Color' | 'BgColor' | 'BorderColor' = 'Color'
): string | undefined => {
    if (!color) {
        return undefined;
    }

    return `${prefix}__${color}`;
};

/**
 * Utility function to generate multiple color-related CSS classes
 * @param options - Object with color properties
 * @returns Array of CSS class name strings
 */
export const getColorClassesMultiple = (options: {
    color?: TColor;
    backgroundColor?: TColor;
    borderColor?: TColor;
}): string[] => {
    const classes: string[] = [];

    if (options.color) {
        const colorClass = getColorClasses(options.color);
        if (colorClass) classes.push(colorClass);
    }

    if (options.backgroundColor) {
        const bgClass = getColorClasses(options.backgroundColor, 'BgColor');
        if (bgClass) classes.push(bgClass);
    }

    if (options.borderColor) {
        const borderClass = getColorClasses(options.borderColor, 'BorderColor');
        if (borderClass) classes.push(borderClass);
    }

    return classes;
};
