export interface CurrentUser {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
    [key:string]: any;
}