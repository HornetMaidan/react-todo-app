/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyledTasks } from './Tasks.styles';
import { Task } from './Task';
import { nanoid } from 'nanoid';
import { Input } from './Input';
import { ListStyles } from './List.styles';

export const List = () => {
  const [tasks, setTasks] = useState([]);
  const addTodo = (text) => {
    const id = nanoid();
    const newTask = { id, text };
    setTasks((prev) => [...prev, newTask]);
  };
  return (
      <ListStyles>
        <Input addTodo={addTodo}/>
          {tasks.map((item) => (
              <Task task={item} key={item.id}/>))}
      </ListStyles>
  );
};
