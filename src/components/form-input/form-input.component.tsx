import { FormEvent } from 'react';
import './form-input.styles.scss';

interface IProps {
    label: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
    [key: string]: unknown;
}

const FormInput = ({ onChange: handleChange, label, ...otherProps }: IProps): JSX.Element => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>
                    {label}
                </label>
            ) : null
        }
    </div>
);

export default FormInput;