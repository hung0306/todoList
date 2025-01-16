import { useDispatch, useSelector } from "react-redux";
import { Compelete, Create, Delete, Undo } from "../../actions";
import { useRef } from "react";
import "./LisTodo.scss"

function ListTodo() {
    const todoList = useSelector(state => state.toDoReducer)
    const dispatch = useDispatch();
    const inputRef = useRef()

    const handleSubmit =(e)=>{
        e.preventDefault()
        let content = e.target[0].value
        
        
        if(content == ""){
            alert("Mày bị ngu à nhập vào đi")
        }else{
            dispatch(Create(content));
            inputRef.current.value = "";
            inputRef.current.focus();
        }
       


        
            
    }

    const handleDelete = (id)=>{
        dispatch(Delete(id))
    }

   

    const handleCompelete = (id)=>{
        
        dispatch(Compelete(id))

    }

    const handleUndo = (id)=>{
        dispatch(Undo(id))
    }
    
    
    return (
        <>
            <div className="todo">
                <form className="todo__form" onSubmit={handleSubmit}>
                    <div className="todo__add"> <input placeholder="Nội dung......" ref={inputRef} name="namejob" />
                        <button className="todo__button--add">+</button></div>
                
                </form>
                {todoList.map((item, index)=>(

                    <div className={item.Compelete ? "todo__item done" : "todo__item"} key={index}>
                        <span>{item.content}</span>
                        <div>{item.Compelete ? (<button onClick={()=>(handleUndo(item.id))}>U</button>) : (<button onClick={()=>(handleCompelete(item.id))}>V</button>)}
                        <button onClick={()=>handleDelete(item.id)}>X</button>
 </div>
                        
                    </div>
                )
                    
                )}


            </div>
        </>
    )
}
export default ListTodo