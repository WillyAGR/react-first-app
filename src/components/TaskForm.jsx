import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {


  const [title, setTitle] = useState("");
  const [descripcion, setdescripcion] = useState("");

  const {createTask} = useContext(TaskContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion
    })


    setTitle('')
    setdescripcion('')



  };

  return (
    <div className="max-w-md mx-auto">
   
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4 rounded-3xl">
      <h1 className="text-2xl font-bold mb-3 text-white">Crear tareas</h1>
        <input
          placeholder="Escribe la tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
        />

        <textarea placeholder="Descripcion de la tarea"
        onChange={(e)=> setdescripcion(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"></textarea>

        <button
        className="bg-indigo-500 rounded-lg px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
