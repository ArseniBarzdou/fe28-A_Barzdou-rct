import * as React from 'react';
export {default} from './Burger'

export interface HoverState {
    isMouseIn: boolean;
}

export interface State {
    isOpen: boolean;
}

export interface Styles {
    bmBurgerBars: Partial<CSSStyleDeclaration>;
    bmBurgerButton: Partial<CSSStyleDeclaration>;
    bmCross: Partial<CSSStyleDeclaration>;
    bmCrossButton: Partial<CSSStyleDeclaration>;
    bmItemList: Partial<CSSStyleDeclaration>;
    bmMenuWrap: Partial<CSSStyleDeclaration>;
    bmMenu: Partial<CSSStyleDeclaration>;
    bmMorphShape: Partial<CSSStyleDeclaration>;
    bmOverlay: Partial<CSSStyleDeclaration>;
}

export interface Props {
    bodyClassName?: string | undefined;
    burgerBarClassName?: string | undefined;
    burgerButtonClassName?: string | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    crossButtonClassName?: string | undefined;
    crossClassName?: string | undefined;
    customBurgerIcon?: JSX.Element | false | undefined;
    customCrossIcon?: JSX.Element | false | undefined;
    customOnKeyDown?(event: React.KeyboardEvent): void;
    disableAutoFocus?: boolean | undefined;
    disableCloseOnEsc?: boolean | undefined;
    disableOverlayClick?: boolean | (() => boolean) | undefined;
    htmlClassName?: string | undefined;
    id?: string | undefined;
    isOpen?: boolean | undefined;
    itemClassName?: string | undefined;
    itemListClassName?: string | undefined;
    itemListElement?: "div" | "nav" | undefined;
    menuClassName?: string | undefined;
    morphShapeClassName?: string | undefined;
    noOverlay?: boolean | undefined;
    noTransition?: boolean | undefined;
    onClose?: (() => void) | undefined;
    onIconHoverChange?: ((state: HoverState) => void) | undefined;
    onOpen?: (() => void) | undefined;
    onStateChange?(state: State): void;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.outerContainer ? PropTypes.string.isRequired : PropTypes.string
    outerContainerId?: string | undefined;
    overlayClassName?: string | undefined;
    // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
    // styles && styles.pageWrap ? PropTypes.string.isRequired : PropTypes.string,
    pageWrapId?: string | undefined;
    right?: boolean | undefined;
    styles?: Partial<Styles> | undefined;
    width?: number | string | undefined;
}

export class ReactBurgerMenu extends React.Component<Props> {}

// export class slide extends ReactBurgerMenu {}
export class fallDown extends ReactBurgerMenu {}
