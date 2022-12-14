export enum TabsNames {
    All ='all',
    Favorites = 'favorite',
    Popular = 'popular',
};

export enum LikeStatus {
    Like = "like",
    Dislike = "dislike"
};

export type CardPostType = {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
    likeStatus?: LikeStatus | null;
};

export type CardListType = Array<CardPostType>;

export type UserActionPayload = {
    username: string;
    password: string;
    email: string;
};

export enum RegistrationStatus {
    Success = "success",
    Failed = "failed",
    Default = "default"
}

export type ActivationParams = {
    uid: string;
    token: string;
};
export type ActivateUserPayload = {
    params: ActivationParams;
    callback: (status: RegistrationStatus) => void;
};