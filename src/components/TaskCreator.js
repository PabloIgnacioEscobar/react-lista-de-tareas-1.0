//[React aplicacion tema 1]
// import { useState } from "react";

// export const TaskCreator = () => {
//   const [newTaskName, setNewTaskName] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("tasks", newTaskName);
//     setNewTaskName("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Ingresa una tarea"
//         value={newTaskName}
//         onChange={(e) => setNewTaskName(e.target.value)}
//       />
//       <button>Guardar</button>
//     </form>
//   );
// };

// export default TaskCreator

//Esta funcion retrnara una porcion de html un jsx. Entonces vamos pasando, las cosas. Para utilizar el componente TaskCreator simplemente lo exportamos con export. Y ya tenemos un componente nuevo. Ahora todo esto lo exportamos de nuevo a app. Cuando exportamos con llaves exportamos la funcion:const TaskCreator = () => si quisieramos exportarlo sin llaves tendriamos que añadir al final export default TaskCreator
//-------------------------------------------------------------------------------------------
//[Mostrar tareas en pantalla]
// import { useState } from "react";

// export const TaskCreator = ({createNewTask}) => {
//   const [newTaskName, setNewTaskName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createNewTask(newTaskName)
//     localStorage.setItem("tasks", newTaskName);
//     setNewTaskName("");
//   }
//    //Lo que hacemos en este caso es que una vez que se guarda, lo establecemos como un string vacio.

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Ingresa una tarea"
//         value={newTaskName}
//         onChange={(e) => setNewTaskName(e.target.value)}
//       />
//       <button>Guardar</button>
//     </form>
//   );
// };
//En vez de recibir props, podemos recibir objetos! y de los objetos podemos extraer propiedades del objeto.Y en [38] ya tampoco le ponemos props.
//-------------------------------------------------------------------
// [Como guardar todo en el local storage]
// import { useState } from "react";

// export const TaskCreator = ({createNewTask}) => {
//   const [newTaskName, setNewTaskName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createNewTask(newTaskName)
//     setNewTaskName("");
//   }
//    //Lo que hacemos en este caso es que una vez que se guarda, lo establecemos como un string vacio.

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Ingresa una tarea"
//         value={newTaskName}
//         onChange={(e) => setNewTaskName(e.target.value)}
//       />
//       <button>Guardar</button>
//     </form>
//   );
// };
//Lo que ocurria antes es que solo guarda la ultima tarea en el local storage, si queremos guardar todo el arreglo, lo que tendriamos que ahcer es vigilar el arreglo, si el arreglo se modifica queremos cambiarlo en el local storage. Lo que podemos hacer es vigilar si las listas ya hechas cambian y basado en eso guardalos.
//Lo unico que hace este taskcreator es añadir un nuevo item dentro de la lista useState, entonces si la lista cambia AHI! es donde vamos a ejecutar el local storage.[ir a appjs 182]
//-------------------------------------------------------------------
//[Actualizacion de tareas.]
import { useState } from "react";

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName("");
  }
   //Lo que hacemos en este caso es que una vez que se guarda, lo establecemos como un string vacio.

  return (
    <form onSubmit={handleSubmit} className="my-3 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Ingresa una tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm m-1 mx-1 row">Guardar</button>
      </div>
    </form>
  );
};