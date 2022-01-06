import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../redux/actions/name.actions';
import { getByPostal } from '../redux/actions/postal.actions';

const Form = ({ title, typeInput, typeForm, placeholder }) => {
    const [postal, setNumber] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        typeForm === 'postal' && dispatch(getByPostal(postal)); // Get cities by postal code
        typeForm === 'name' && dispatch(getByName(name)); // Get cities by name

        setName('');
        setNumber('');
    };

    return (
        <section>
            <h2>{title}</h2>
            <form className="form" onSubmit={handleSubmitForm}>
                <input
                    type={typeInput}
                    placeholder={placeholder}
                    value={typeInput === 'number' ? postal : name}
                    onChange={
                        typeInput === 'number'
                            ? (e) => setNumber(e.target.value)
                            : (e) => setName(e.target.value)
                    }
                />
                <div className="form__icon" onClick={handleSubmitForm}>
                    <i className="fas fa-search" />
                </div>
            </form>
        </section>
    );
};

export default Form;
