import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
    const [val, setVal] = useState();
    const [todo, setTodo] = useState([]);
    const [editedValue, setEditedValue] = useState('')
    const [editId, setEditId] = useState(null);

    const handleClick = () => {
        if (todo !== "" && val !== "") {
            setTodo([...todo, { title: val, id: uuidv4() }]);
            setVal('')
        }
    }
    const handleDelete = ({ id }) => {
        setTodo(todo.filter((todos) => todos.id !== id));
    };
    const ref = useRef(null)
    const refClose = useRef(null)
    const handleEdit = (todos,id) => {
        console.log(todos)
        console.log(id)
        setEditId(id);
        ref.current.click(id);
    }
    const updateTodo = (todos,id) => {
        
        console.log(id,todos,'updatedfsdf')
        console.log(editId,'this is editid')
       
        setTodo(
            todo.map((todos) => (todos.id === editId ? { ...todos, title: editedValue } : todos))
            
          );
          setEditId(null);
          ref.current.click()
        //setTodo([...todo,{ title: editedValue }]);
     
        
        
       
           
    }
    return (
        <div className='container'>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Enter your todo</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setVal(e.target.value)} value={val} name={val} rows="3"></textarea>
            </div>
            <button onClick={handleClick}>Add TODO</button>

            <div className='col-md-3 my-3'>
                <h1>Your Todo List</h1>
                {todo.map((todos) => {
                    return <li className='list-item' key={todos.id}>
                        <input type="text" value={todos.title} />
                        <i className="fa-solid fa-trash-can mx-3" onClick={() => handleDelete(todos)}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => handleEdit(todos.title,todos.id)}></i>

                        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label">Enter your todo</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" value={todos.etitle} rows="3" onChange={(e)=> setEditedValue(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={(e)=>{
                                            console.log(e.target,'this is e');
                                            updateTodo(todos.title,todos.id)}}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>



                })}


            </div>



        </div>
    )
}

export default Todo
