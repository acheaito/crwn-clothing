import { FormEvent } from 'react';
import './form-input.styles.scss';

interface IProp {
    label: string;
    handleChange: (event: FormEvent) => void;
    [key: string]: any;
}

const FormInput = ({ handleChange, label, ...otherProps }: IProp) => (
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