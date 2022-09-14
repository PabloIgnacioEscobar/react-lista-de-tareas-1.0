// import {TaskRow} from "./TaskRow"

// export const TaskTable = ({tasks, toggleTask}) => {
//     return (
//         <table>

//             <thead>
//                 <tr>Tarea</tr>
//             </thead>

//             <tbody>
//                 {tasks.map(task => (
//                     <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
//                 ))}
//             </tbody>

//         </table>
//     )
// }
//Recibimos una propiedad y debajo de recorrerlo y mostrarlo en multiples filas. En 8 9 10 estoy mostrando esos nombres de las tareas pero quisiera traer mostrar la propiedad done.Entonces para eso voy a crear al lado del nombre una especie checkbox donde el usiario va poder marcar y desmarcar. De esta forma vamos a poder recibir si el usuario a cambiado el estado o no. Y tambien lo recibira ttaskrow. Nota estos componentes al que les pasamos los toggleTask van directo a app, es decir, no estan conectadas.
//-------------------------------------------------------------------
// [Tablas]
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
        //Con lo de false aqui estamos diciendo que si no me pasan ese showcompleted inicialmente va estar en false. Si no le pasamos al tasktable un showcompleted va estar undefined entonces si es undefined no va poder compararlo.
        const taskTableRows = (doneValue) => {

        return (
            tasks
            .filter(task => task.done === doneValue)
            .map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ))
    )
};

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tarea</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

// Cortamos el codigo [11,15] por que sino era mucho.
//[43] como es una funcion simplemente la inicializamos.
//Entonces lo que aremos es que basado en una propiedad vamos a cambiar los valores[27]
//[31][Si le coloco false va mantener todas las tareas donde sean false ]
