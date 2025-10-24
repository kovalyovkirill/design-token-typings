import React from 'react';
import clsx from 'clsx';
import { TColor } from '../../types/colors';
import { TMargin } from '../../types/spacing';
import { getSpacingClasses } from '../../utils/getSpacingClasses';
import styles from './Button.module.scss';

type BaseButtonProps = {
    children: React.ReactNode;
    color?: TColor;
    className?: string;
} & TMargin;

type ButtonAsButton = BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: never;
};

type ButtonAsLink = BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
>((props, ref) => {
    const { children, color, className, margin, marginTop, marginRight, marginBottom, marginLeft, ...rest } = props;

    const spacingClasses = getSpacingClasses({
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
    });

    const buttonClasses = clsx(
        styles.button,
        color && styles[`button--${color}`],
        ...spacingClasses,
        className
    );

    if ('href' in rest && rest.href) {
        return (
            <a
                ref={ref as React.Ref<HTMLAnchorElement>}
                className={buttonClasses}
                {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={buttonClasses}
            {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
