import {useState} from 'react'
function InputTodo({addTodo}){
    const [i, sI] = useState('');
    const hsB = (o) => {
        o.preventDefault();
        addTodo(i);
        sI('');
    };

    


    return (
        <form onSubmit={hsB}>
           
        
            {/* <h1>Hi! PLEASE ADD SOME TASKS</h1> */}
            <input type="text"
            value={i}
            onChange={(o)=> sI(o.target.value)}
            placeholder="Add Your Task"
            />
            <button type="submit">Add</button>
            </form>

    );


}
export default InputTodo;

