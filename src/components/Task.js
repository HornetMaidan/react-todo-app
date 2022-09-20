import React from 'react';
import {StyledTasks} from './Tasks.styles';

export const Task = ({task}) => {
    return(
            <StyledTasks>{task.text}</StyledTasks>
    )
}
