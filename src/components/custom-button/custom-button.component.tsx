import './custom-button.styles.scss';

interface IProp {
    children: any;
    [key: string]: any;
}

const CustomButton = ({ children, ...otherProps }: IProp) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;