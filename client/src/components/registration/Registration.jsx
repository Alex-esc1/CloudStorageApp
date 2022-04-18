import React from 'react';
import Input from '../../utils/input/Input';
import "./registration.less"

const Registration = () => {
    return (
        <div className='registration'>
            <div className="registration_header">Регистрация</div>
            <Input type="text" placeholder=""/>
            <Input type="text" placeholder=""/>
            <Input type="text" placeholder=""/>
            <Input type="text" placeholder=""/>
            <button className="registration_btn">Войти</button>
        </div>
    );
};

export default Registration;