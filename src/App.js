//App Component
import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';


const App = () => {
  const[inputList, setInputList] = useState("");
  
  const [items,setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  }
  const addItems = () => {
    setItems( (oldItems) => {
      return [...oldItems,inputList];
    })
    setInputList("");
  };
  
  const deleteItems = (id) => {
     setItems((oldItems) => {
       return oldItems.filter( (arrElem,index) => {
         return id !== index;
       });

     });
  };
  
    return (
        <>
        <div className = "main_div">
            <div className = "center_div">
                <br/>
                <h1> ToDo List</h1>
                <br/>
                <input type ="text" 
                placeholder = "Add iterms"
                onChange = {itemEvents}
                value = {inputList}/>
                <button 
                onClick = {addItems}
                onSubmit> 
                + </button>

                <ol>
                    
                       {
                       items.map( (currElem, index) => {
                        //  Making ToDoList component
                        //  return  <li>{currElem}</li> 
                        return <ToDoList 
                         text = {currElem} 
                         key = {index}
                         id = {index}
                         onSelect = {deleteItems}
                         />
                       })
                      }
                    
                </ol>
            </div>

        </div>
        </>
    )

}
export default App;