import AddTask from './todotask' ;


function Indi({todos, checkComplete, deleteTodo}){
   return (
        <ul>
        {todos.map((todo) => (
            <AddTask
            key={todo.id}
            todo={todo} 
            checkComplete={checkComplete}       
            deleteTodo={deleteTodo}
 />
        ))}
      </ul>

    );
}
export default Indi;

