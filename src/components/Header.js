import React from 'react'
import {StyledHeader} from './Header.styles';

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <h3>To-Do List</h3>
                <h5>Привет, username.</h5>
            </div>
        </StyledHeader>
    )
}