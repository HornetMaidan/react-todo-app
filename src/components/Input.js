/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {StyledInput} from './Input.styles';

export const Input = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        if (e.code === 'Enter' && value.trim())
            addTodo(value.trim)
        setValue(e.target.value)
    }
    return (
        <StyledInput type={'text'} value={value} onChange={handleChange}/>
    )
}