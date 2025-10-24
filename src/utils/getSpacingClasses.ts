import {TGap, TMargin, TPadding} from "../types/spacing";

/**
 * Generates CSS class names for spacing (margin and padding)
 * @example
 * getSpacingClasses({ marginTop: 2, paddingLeft: 4 })
 * // Returns: ['Space__mt-2', 'Space__pl-4']
 */
export const getSpacingClasses = (props: Partial<TMargin & TPadding>): string[] => {
    const classes: string[] = [];

    const map: Record<keyof (TMargin & TPadding), string> = {
        margin: 'm',
        marginTop: 'mt',
        marginRight: 'mr',
        marginBottom: 'mb',
        marginLeft: 'ml',
        padding: 'p',
        paddingTop: 'pt',
        paddingRight: 'pr',
        paddingBottom: 'pb',
        paddingLeft: 'pl',
    };

    for (const [key, value] of Object.entries(props)) {
        if (value !== undefined) {
            const prefix = map[key as keyof (TMargin & TPadding)];
            classes.push(`Space__${prefix}-${value}`);
        }
    }

    return classes;
};

export const getGapClasses = (props: Partial<TGap>): string[] => {
    const classes: string[] = [];

    if (props.gap !== undefined) {
        classes.push(`Gap__${props.gap}`);
    }

    if (props.rowGap !== undefined) {
        classes.push(`Gap__y-${props.rowGap}`);
    }

    if (props.columnGap !== undefined) {
        classes.push(`Gap__x-${props.columnGap}`);
    }

    return classes;
};
