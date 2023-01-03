import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addList, deleteList, removeList } from "../actions";
import "./todo.css";

const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your items here👇🏻</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍🏻 Add items.."
              value={inputValue}
              onChange={(event) => setinputValue(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Delete items"
              onClick={() => dispatch(addList(inputValue), setinputValue(""))}
            ></i>
          </div>

          <div className="showItems">
            {
            list.map((elem) => {
              return(
                <div className="eachItem" key={elem.id}>
                <h3>{elem.data}</h3>
                <div className="todo-btn">
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete items"
                  onClick={() =>
                    dispatch(deleteList(elem.id))
                  }
                ></i>
              </div>
              </div>
              )
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="remove All" 
            onClick={()=>dispatch(removeList())}><span>Check List</span></button>

          </div>

        </div>
      </div>
    </>
  );
};

export default Todo;
