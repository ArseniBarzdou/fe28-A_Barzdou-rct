export enum TitleType {
    Signin = 'signin',
}

export type TitleClassnamesType = {
    [k in TitleType]: string;
}

export type TitlePropsType = {
    title: string;
    type: TitleType;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}