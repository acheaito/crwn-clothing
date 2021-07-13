import { ReactNode, ReactPortal } from 'react';
import './custom-button.styles.scss';

interface IProp {
    children: string | ReactNode | ReactPortal;
    isGoogleSignIn?: boolean;
    [key: string]: unknown;
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: IProp): JSX.Element => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;