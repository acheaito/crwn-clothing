import './custom-button.styles.scss';

interface IProp {
    children: any;
    isGoogleSignIn?: boolean;
    [key: string]: any;
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: IProp) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;