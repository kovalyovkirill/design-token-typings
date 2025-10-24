import {ReactNode, CSSProperties, ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import {TMargin, TPadding, TGap} from '../../types/spacing';
import {TColor} from '../../types/colors';
import {getSpacingClasses, getGapClasses} from '../../utils/getSpacingClasses';
import {getColorClassesMultiple} from '../../utils/getColorClasses';
import styles from './Box.module.scss';

export type TBoxProps = {
    children?: ReactNode;
    className?: string;

    // Flex container props
    direction?: CSSProperties['flexDirection'];
    justify?: CSSProperties['justifyContent'];
    align?: CSSProperties['alignItems'];
    wrap?: CSSProperties['flexWrap'];

    // Display
    inline?: boolean;

    // Color props
    color?: TColor;
    backgroundColor?: TColor;
    borderColor?: TColor;
} & TMargin & TPadding & TGap & Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'children'>;

export const Box = ({
  children,
  className,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  inline = false,
  ...restProps
}: TBoxProps) => {
    const {
        margin, marginTop, marginRight, marginBottom, marginLeft,
        padding, paddingTop, paddingRight, paddingBottom, paddingLeft,
        gap, rowGap, columnGap,
        color, backgroundColor, borderColor,
        ...divProps
    } = restProps;

    const spacingClasses = getSpacingClasses({
        margin, marginTop, marginRight, marginBottom, marginLeft,
        padding, paddingTop, paddingRight, paddingBottom, paddingLeft
    });

    const gapClasses = getGapClasses({gap, rowGap, columnGap});

    const colorClasses = getColorClassesMultiple({
        color,
        backgroundColor,
        borderColor
    });

    const boxClasses = clsx(
        styles.box,
        inline && styles.inline,
        styles[`direction-${direction}`],
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        styles[`wrap-${wrap}`],
        ...spacingClasses,
        ...gapClasses,
        ...colorClasses,
        className
    );

    return (
        <div className={boxClasses} {...divProps}>
            {children}
        </div>
    );
};
