export type ButtonSizes = 'S' | 'M';

type Colors = {
    default: string;
    hovered: string;
    pressed: string;
    disabled: string;
};

export interface ButtonTheme {
    /** Solid button colors */
    solid: {
        textColor: Colors;
        bgColor: Colors;
    };
    /** Outlined button colors */
    outlined: {
        textColor: Colors;
        bgColor?: Colors;
        borderColor?: Colors;
    };
    /** Flat button colors */
    flat: {
        textColor: Colors;
    };
    /** Border radius for different type of edges*/
    borderRadius: {
        square: string;
        rounded: string;
        circle: string;
    };
}
