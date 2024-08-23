import { useState } from "react"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import 'animate.css'
import './home.css'

function Home() {
    const [todos, setTodos] = useState(["Home-task", "Class-task"]);
    const [value, setValue] = useState("");
    // const [edit, setEdit] = useState(false);
    // const [inputEdit, setInputEdit] = useState(todos.name);

    localStorage.setItem("Todos", JSON.stringify(todos));
    localStorage.setItem("Values", JSON.stringify(value));

    let btn = () => {
        if (main.innerHTML == "Update To DO") {
            main.innerHTML = "Set To DO";
            setTodos([...todos])
            setValue("")
        }
    }

    let validate=() =>{
        let input=document.getElementById("input");
        if (input.value == "") {
            setTodos([...todos]);
        }
    }

    return (

        <div className="parent">

            <button id="logout">
                <NavLink to={"/"} id="navlink">
                    Logout
                    <CgLogOut id="icon" />
                </NavLink>
            </button>

            <div className="todoapp animate__animated animate__fadeIn">

                <h1>TO DO APP</h1>

                <div className="input">

                    <input
                        id="input"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <button
                        id="main"
                        onClick={() => {
                            setTodos([...todos, value]);
                            setValue("");
                            btn();
                            validate();
                        }}>
                        Add To DO
                    </button>

                </div>

                <ul>
                    {todos.map((v, i) => (

                        <div className="todolist">

                            <li key={i}>{v}</li>

                            <button onClick={() => {
                                setTodos(todos.filter((elem, id) => { return i !== id; }))
                            }}>
                                <MdDelete />
                            </button>


                            <button onClick={() => {
                                let main = document.getElementById("main");
                                main.innerHTML = "Update To DO";
                                setEdit(true);
                                setValue(todos)

                            }}>
                                <FaEdit />
                            </button>

                        </div>
                    ))}

                </ul>

                <button id="clear"
                    onClick={() => {
                        setTodos(todos.filter((v, i) => { return i !== i; }))
                    }}>
                    Clear All
                </button>


            </div>

        </div>
    )
}

export default Home;