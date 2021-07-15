import { ReactNode, ReactPortal } from 'react';
import './custom-button.styles.scss';

interface IProps {
    children: string | ReactNode | ReactPortal;
    isGoogleSignIn?: boolean;
    [key: string]: unknown;
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: IProps): JSX.Element => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;