import React from 'react';
import Input from '../../utils/input/Input';
import "./registration.less"

const Registration = () => {
    return (
        <div className='registration'>
            <div className="registration_header">Регистрация</div>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <button className="registration_btn">Войти</button>
        </div>
    );
};

export default Registration;