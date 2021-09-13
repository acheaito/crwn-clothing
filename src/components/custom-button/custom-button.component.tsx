import { ReactNode, ReactPortal } from 'react';
import './custom-button.styles.scss';

interface IProps {
    children: string | ReactNode | ReactPortal;
    isGoogleSignIn?: boolean;
    inverted?: boolean;
    [key: string]: unknown;
}

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }: IProps): JSX.Element => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;