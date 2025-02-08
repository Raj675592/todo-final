
function AddTask({ todo, checkComplete, deleteTodo }) {
    return (
<li>
    <span
    style={{textdecoration: todo.completed ? 'line-through' : 'none'}}
    onClick={() => checkComplete(todo.id)}
    >
        {todo.text}
    </span>
    <button  onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
    );
}
export default AddTask;

