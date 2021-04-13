import React, { useState } from 'react';
import './App.css';


const ToDoList = (props) => {

    return (
        <>
        <div className = "todo_style">
        <span>
        <i class = "fa fa-times" 
        onClick = { () => {
            props.onSelect(props.id);
            }}> </i> 
         </span>  
        <li >{props.text}</li> 
        </div>
         
        </>
    );
}

export default ToDoList;

 