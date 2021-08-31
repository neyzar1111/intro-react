import React,{useState,useEffect}  from "react"
import Button from './Button';
// import ClearBtn from './ClearBtn';

export default function Form(){
    function makeTask (){
        return(
`            
                <input type="checkbox">
            `
        );
    }
    function  addTask (){
        console.log(makeTask());
        let newDiv = document.createElement("div");
        newDiv.prepend(makeTask())
        newDiv.innerHTML = document.getElementById("newTodo").value;
        document.getElementById("taskContainer").appendChild(newDiv);


    }

    return(
        <div>

            <label htmlFor="newTodo">Add new task</label>
            <input id="newTodo" type="text" placeholder="New TODO"/>

            <label htmlFor="from">From:</label>
            <input id="from" type="date"/>

            <label htmlFor="to">To:</label>
            <input id="to" type="date"/>

            <button onClick={ addTask }>add</button>
            {/*<button onClick={ clearTask }>clear</button>*/}

        </div>
    );
}