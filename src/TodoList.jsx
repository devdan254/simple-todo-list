import {useState} from 'react';
import styles from './style.css'
 
function TodoList() {

    const [tasks, setTasks] = useState([]);
    //const [newTask, setNewTask] = useState("");

    function addTask(){

        const task = document.getElementById("addTask").value;
        document.getElementById("addTask").value = "";
        
        if(task.trim() !==""){    
        setTasks((t) => [...t, task]);

        }
       
    };
    function removeTask(index){
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);

    };
    function toggleTaskUp(index){
        const updateToggleTaskUp = [...tasks];
        if(index > 0){
        [updateToggleTaskUp[index], updateToggleTaskUp[index - 1]]
         = [updateToggleTaskUp[index - 1], updateToggleTaskUp[index]];

        setTasks(updateToggleTaskUp);
        }

    };
    function toggleTaskDown(index){
        const updateToggleTaskUp = [...tasks];
        if(index < tasks.length - 1){
        [updateToggleTaskUp[index], updateToggleTaskUp[index + 1]]
         = [updateToggleTaskUp[index + 1], updateToggleTaskUp[index]];

        setTasks(updateToggleTaskUp);
        }

    };
    
    return (<div className="todo-list">
        <h1 className='title'>Todo List</h1>
        <div className="add-task">
            <input className='add-tast-input' type="text" 
             Placeholder="Add New Task" id ="addTask"/>
            <button onClick={addTask}>Add Task</button>
            
        </div>
        <div className='tasks'>

      
        <ol className='task-lists'>
            {
                tasks.map((task,index) => {

                 return <li key={index} className='task-list'>{task} 
                 <button className="remove" onClick={()=>removeTask(index)}>X</button>
                 <button className="move-up" onClick={()=>toggleTaskUp(index)}>👆</button>
                 <button className="move-down" onClick={()=>toggleTaskDown(index)}>👇</button></li>
                })

            }
        </ol>
        </div>


    </div>);

}

export default TodoList