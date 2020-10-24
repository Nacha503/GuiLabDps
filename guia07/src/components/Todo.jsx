import React from 'react';

const Todo = (props) => {

    const {todo,index,deleteTodo} = props
    return (
        <>
            <div className="list">
                <h3>{todo} </h3>
                <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    );
};

export default Todo;