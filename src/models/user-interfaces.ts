export interface CurrentUser {
    id?: string;
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
    [key: string]: any;
}