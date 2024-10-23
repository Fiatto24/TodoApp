import { Button } from "react-bootstrap";

const Todo = ({data, deleteTodo, }) => {
    

    return <div className="bg-secondary-subtle p-3 px-3 w-100 rounded d-flex
    justify-content-between align-item-center"><span>{data}</span>

    <Button variant="danger" size = "sm" onClick={() => deleteTodo(data)} > 
        Delete 
    </Button>

    </div>

    
};

export default Todo;