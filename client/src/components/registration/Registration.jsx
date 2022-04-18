import React from 'react';
import Input from '../../utils/input/Input';
import "./registration.css"

const Registration = () => {
    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input type="text" placeholder="Введите email..."/>
            <Input type="password" placeholder="Введите пароль..."/>
            <button className="registration_btn">Войти</button>
        </div>
    );
};

export default Registration;